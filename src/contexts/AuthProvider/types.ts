import { ReactNode } from "react";

export interface UserProps {
    email?: string;
    token?: string;
}

export interface ContextProps extends UserProps {
    authenticate: (email: string, password: string) => Promise<void>;
    getUserLocalStorage: () => string|null;
    logout: () => void;
    forgotPassword: (email:string ) => void;
}

export interface AuthProviderProps {
    children: ReactNode;
}