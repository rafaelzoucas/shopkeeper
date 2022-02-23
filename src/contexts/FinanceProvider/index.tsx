import { createContext, ReactNode, useEffect, useState } from "react";

import { api } from '../../services/api';

export interface FinanceProviderProps {
    children: ReactNode;
}

export const FinanceContext = createContext({})

export function FinanceProvider({ children }: FinanceProviderProps){
    const [balance, setModel] = useState(0)

    useEffect(() => {
        api.post('shop/payment-historic/model', {token: localStorage.getItem('user-token')})
        .then(({data}) => {
            setModel(data.balance)
        })
    }, [])

    return(
        <FinanceContext.Provider value={balance}>
            { children }
        </FinanceContext.Provider>
    )
}