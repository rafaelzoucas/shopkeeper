import { Link } from 'react-router-dom';

import { 
    Container, 
    LoginForm,
    Register,
} from './styles';
import { SubmitButton } from '../../styles/MaterialDesign';

import { MdChevronRight } from 'react-icons/md';

import logoImg from '../../assets/logo-white.png';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function Login() {
    const [email, setEmail] = useState('email@email.com')
    const [password, setPassword] = useState('asdfasdfasdf')

    function showNotify(){

    }

    // {
    //     email: "teste@hotmail.com"
    // }

    // useEffect(() => {
    //     api.post('login/shop')
    //     .then(response => console.log(response.data))
    // }, [])

    function handleLogin() {
        const data ={
            email,
            password
        }

        api.post('/login/shop', data)
    }

    return(
        <>
            <Container>
                <img src={logoImg} alt="Helix" width="160"/>

                <LoginForm>
                    <h3>Login</h3>

                    <label>E-mail</label>
                    <input 
                        type="email" 
                        placeholder="exemplo@exemplo.com"
                        required
                    />

                    <label>Senha</label>
                    <input 
                        type="password" 
                        placeholder="A sua senha vai aqui"
                        required
                    />

                    <Link 
                        to="/forgot-password" 
                        className="forgot-password"
                    >
                        <p>Esqueci a minha senha</p>
                    </Link>

                    <SubmitButton onClick={handleLogin}>
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