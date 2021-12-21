import { useAuth } from "../../contexts/AuthProvider/useAuth";

export function ProtectedLayout({children}: { children: JSX.Element }) {
    const auth = useAuth()

    if(!auth.email) {
        return(
            <h1>You dont have access</h1>
        )
    }

    return children
}