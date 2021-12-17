import { createContext, useState } from 'react'

export const SnackbarContext = createContext({});

export default function SnackbarProvider({children}){
    const [isVisible, setIsVisible] = useState(false)
    const [title, setTitle] = useState('Padrão')
    const [message, setMessage] = useState('Mensagem padrão')
    const [type, setType] = useState('loading')
    const [timeOut, setTimeOut] = useState(null)

    return(
        <SnackbarContext.Provider value={{
            isVisible, setIsVisible,
            title, setTitle,
            message, setMessage,
            type, setType,
            timeOut, setTimeOut
        }}>
            {children}
        </SnackbarContext.Provider>
    )
}