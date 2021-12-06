import { useState } from 'react';

import { FinishedDeliveries } from '../../components/FinishedDeliveries';
import { DeliveriesCard } from '../../components/DeliveriesCard';

import { 
    Tabs, 
    Tab, 
    Line 
} from "../Deliveries/styles";

export function Deliveries() {
    const [isFilterActive, setIsFilterActive] = useState('inProgress')
    
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

            {isFilterActive === 'inProgress' ? (
                <>
                    <DeliveriesCard />
                </>

                ) : (
                    <FinishedDeliveries />
                )
            }
        </>
    )
}