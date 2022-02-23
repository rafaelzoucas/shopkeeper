import { useAuth } from "../../contexts/AuthProvider/useAuth";
import { Login } from "../../pages/Login";

export function ProtectedLayout({children}: { children: JSX.Element }) {
    const auth = useAuth()

    const token = auth.getUserLocalStorage()
    
    if(token === null) {

        return(
            <Login />
        )
    }

    return children
}