import { useEffect, useState } from 'react';

import { DeliveryCardProps } from '../../contexts/DeliveriesProvider/types';
// import { useDeliveries } from '../../contexts/DeliveriesProvider/useDeliveries'

import { FinishedDeliveries } from '../../components/FinishedDeliveries';
import { DeliveriesCard } from '../../components/DeliveriesCard';

import { 
    Tabs, 
    Tab, 
    Line 
} from "../Deliveries/styles";

import { api } from '../../services/api';

export function Deliveries() {
    const [isFilterActive, setIsFilterActive] = useState('inProgress')
    const [cards, setCards] = useState<DeliveryCardProps[]>([])
    
    useEffect(() => {
        api.post(
            '/shop/listing-delivery/model', 
            {token: localStorage.getItem('user-token')}
        ).then(({data}) => {
            setCards(data.cards)
        })
    }, [])

    return(
        <>
            <Tabs>
                <Tab
                    onClick={() => setIsFilterActive('inProgress')}
                    isActive={isFilterActive === 'inProgress'}
                >
                    Em progresso
                </Tab>
                <Tab
                    onClick={() => setIsFilterActive('finished')}
                    isActive={isFilterActive === 'finished'}
                >
                    Finalizadas
                </Tab>
            </Tabs>
            
            <Line />

            {
                isFilterActive === 'inProgress' 
                ? (
                    cards.filter(value => value.deliveryman !== null).map((card) => 
                        <DeliveriesCard
                            key={card.deliveryman.id}
                            deliveryman={card.deliveryman}
                            deliveries={card.deliveries}
                        />
                    )
                ) 
                : (
                    cards.map((card) => 
                        <FinishedDeliveries />
                    )
                )
            }
        </>
    )
}