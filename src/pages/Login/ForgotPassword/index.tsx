import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthProvider/useAuth";
import { SubmitButton } from "../../../styles/MaterialDesign";

import { Container, Form } from "./styles";

export function ForgotPassword() {
    const [isCodeSent, setIsCodeSent] = useState(false)
    const [email, setEmail] = useState('mauroxs58@hotmail.com')

    const auth = useAuth()

    function handleForgotPassword(event: FormEvent ) {
        event.preventDefault()
        auth.forgotPassword(email)
        setIsCodeSent(true)
    }

    return(
        <Container>
            {
                isCodeSent ? (
                    <Form>
                        <h2>Verifique seu Whatsapp</h2>
                        <h4>Enviamos um link no seu WhatsApp para você recuperar a sua senha. </h4>
                        <h4>* Se você não recebeu o link, verifique se o e-mail foi digitado corretamente e tente novamente.</h4>
                        <Link to="/">
                            <p>Login</p>
                        </Link>
                    </Form>
                ) : (
                    <Form onSubmit={handleForgotPassword}>
                        <h2>Recuperar senha</h2>
                        <input 
                            type="text" 
                            placeholder="Digite o seu e-mail"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            required
                        />
                        <SubmitButton type="submit">
                            Recuperar
                        </SubmitButton>
                        <Link to="/">
                            <p>Voltar</p>
                        </Link>
                    </Form>
                )
            }
        </Container>
    )
}