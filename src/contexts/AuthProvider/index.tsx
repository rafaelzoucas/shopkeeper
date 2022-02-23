import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthProviderProps, ContextProps, UserProps } from "./types";

import { api } from "../../services/api";

export const AuthContext = createContext({} as ContextProps)

function setUserLocalStorage(user: UserProps | null) {
    localStorage.setItem('user-token', user?.token || '')
}

export function getUserLocalStorage() {
    const token = localStorage.getItem('user-token');
    return token ? token : null;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps | null>()
    const navigate = useNavigate()

    function logout() {
        setUser(null)
        setUserLocalStorage(null)

        navigate('/')
    }

    function forgotPassword(email: string) {
        api.post(
            '/login/send-recover-message', 
            {email: email, type: 'shop'}
        )
    }

    async function authenticate(email: string, password: string) {
        api.post('/login/shop', { email, password })
            .then(request => {
                if (!request.data.success) {
                    alert('Email ou senha estão incorretos')
                    return;
                }

                const payload = {token: request.data.token }

                setUser(payload)
                setUserLocalStorage(payload)

                navigate('/')
            }
        )  
    }

    return(
        <AuthContext.Provider 
            value={{
                ...user, 
                authenticate, 
                logout, 
                getUserLocalStorage, 
                forgotPassword
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}