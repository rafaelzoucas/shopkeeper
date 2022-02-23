import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    width: 100vw;
    height: 100vh;
    
    padding: 5rem 1rem;
    
    background-color: var(--orange-dark);
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;

    background-color: white;
    
    max-width: 425px;
    width: 100%;

    padding: 1.5rem;

    border-radius: 0.75rem;

    label {
        margin: 1.25rem 0 0.25rem 0;

        font-size: 0.875rem;
    }

    .forgot-password {
        text-align: right;
        margin: 1.25rem 0;
    }
`

export const Register = styled.div`
    display: flex;

    background-color: white;

    width: 100%;
    max-width: 425px;
    height: 7.75rem;

    padding: 1.5rem;

    border-radius: 0.75rem;

    .register-link {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;

        .chevronRight {
            font-size: 1.5rem;
            color: var(--orange-default);
        }
    }
`