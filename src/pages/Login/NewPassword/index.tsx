import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { SubmitButton } from "../../../styles/MaterialDesign";
import { Container, Form } from "../ForgotPassword/styles";

export function NewPassword() {
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')

    function handleNewPassword(event: FormEvent) {
        event.preventDefault()

        if(cPassword !== password) {
            alert('As senhas estão diferentes, por favor, tente novamente.')
            setPassword('')
            setCPassword('')
        }
    }

    return(
        <Container>
            <Form onSubmit={handleNewPassword}>
                <h2>Nova senha</h2>
                <input 
                    type="password" 
                    placeholder="Digite nova senha"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                />
                <input 
                    type="password" 
                    placeholder="Confirme a nova senha"
                    value={cPassword}
                    onChange={event => setCPassword(event.target.value)}
                    required
                />
                <SubmitButton type="submit" >
                    Alterar senha
                </SubmitButton>
                <Link to="/">
                    <p>Login</p>
                </Link>
            </Form>
        </Container>
    )
}