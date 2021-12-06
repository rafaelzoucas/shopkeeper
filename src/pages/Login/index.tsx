import { MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { SubmitButton } from '../../styles/MaterialDesign';

import { 
    Container, 
    LoginForm,
    Register,
} from './styles';

import logoImg from '../../assets/logo-white.png';

export function Login() {
    return(
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

                <SubmitButton>
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
    )
}