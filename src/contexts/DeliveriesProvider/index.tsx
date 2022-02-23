import { createContext, useState } from "react";
import { DeliveryCardProps, DeliveriesProviderProps } from "./types";

import { api } from '../../services/api';

export const DeliveriesContext = createContext({})

export function DeliveriesProvider({ children }: DeliveriesProviderProps){
    const [cards, setCards] = useState<DeliveryCardProps[]>([])

    function getDeliveriesProps() {
        api.post(
            '/shop/listing-delivery/model', 
            {token: localStorage.getItem('user-token')}
        ).then(({data}) => {
            setCards(data.cards)
        })
    }

    return(
        <DeliveriesContext.Provider 
            value={{
                cards,
                getDeliveriesProps
            }}
        >
            { children }
        </DeliveriesContext.Provider>
    )
}