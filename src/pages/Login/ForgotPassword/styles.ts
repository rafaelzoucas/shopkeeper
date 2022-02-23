import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    gap: 1rem;

    padding: 0 1rem;

    background-color: var(--orange-dark);

    h2 {
        color: rgb(83, 83, 83);
        margin-bottom: 1.5rem;
    }

    h4 {
        margin-bottom: 1.5rem;
        font-weight: 500;
        color: rgb(110, 110, 110);
    }

    `

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    
    background-color: white;
    
    max-width: 425px;
    width: 100%;
    
    padding: 1.5rem;
    
    border-radius: 0.75rem;

    gap: 1.5rem; 
    
    input {
        width: 100%;
        max-width: 425px;
        padding: 0 1rem;
    }
    
    button {
        width: 100%;
        max-width: 425px;
    }
    
    p {
        text-align: center;
        font-size: 1em;
        cursor: pointer;
        color: var(--orange-700);
    
        &:hover {
            text-decoration: underline;
        }
    }
`