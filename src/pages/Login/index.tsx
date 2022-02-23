import { FormEvent, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { SubmitButton } from "../../styles/MaterialDesign"
import { MdChevronRight } from "react-icons/md"
import { Container, LoginForm, Register } from "./styles"

import logoImg from '../../assets/logo-white.png'
import { useAuth } from "../../contexts/AuthProvider/useAuth"

export function Login() {
    const auth = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState('mauroxs58@hotmail.com')
    const [password, setPassword] = useState('ab9732_c')

    useEffect(() => {
        const token = auth.getUserLocalStorage()
    
        if(token === null) {
            return
        }else{
            navigate('/')
        }
    })

    async function handleLogin(event: FormEvent) {
        event.preventDefault()

        await auth.authenticate(email, password)
        console.log(auth.getUserLocalStorage)
    }

    return (
        <>
            <Container>
                <img src={logoImg} alt="Helix" width="160" />

                <LoginForm onSubmit={handleLogin}>
                    <h3>Login</h3>

                    <label>E-mail</label>
                    <input
                        type="email"
                        placeholder="exemplo@exemplo.com"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        required
                    />

                    <label>Senha</label>
                    <input
                        type="password"
                        placeholder="Digite a sua senha aqui"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        required
                    />

                    <Link
                        to="/forgot-password"
                        className="forgot-password"
                    >
                        <p>Esqueci a minha senha</p>
                    </Link>

                    <SubmitButton type="submit">
                        Login
                    </SubmitButton>
                </LoginForm>

                <Register>
                    <Link to="/register" className="register-link">
                        <p>Não tem conta? <strong>Cadastre-se</strong></p>
                        <MdChevronRight className="chevronRight" />
                    </Link>
                </Register>
            </Container>
        </>
    )
}