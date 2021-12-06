import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;

    padding: 1rem;
    
    border-radius: 0.75rem;

    button {
        padding: 1rem;
        max-width: 425px;
    }

    hr {
        margin-top: 1.5rem;
    }

    @media(max-width: 425px) {
        margin-top: 0.5rem;
    }
`

export const Balance = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    gap: 2rem;

    width: 100%;

    @media (max-width: 636px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        button {
            margin: 0 auto;
        }
    }
`

export const AddBalance = styled.form`
    display: flex;
    flex-direction: column;

    gap: 0.25rem;
    
    width: 100%;
    max-width: 425px;
    
    label {
        margin-top: 0.5rem;
        font-size: 0.875rem;
    }
    
    input {
        max-width: 425px;
    }
`

export const BalanceItem = styled.div`
    display: flex;
    flex-direction: column;

    gap: 0.25rem;
    width: 100%;

    input[type="file"] {
        display: none;
    }
`

export const AddFileButton = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;

    border-radius: 0.75rem;
    
    margin-bottom: 1rem;

    background-color: transparent;
    border: 2px dashed var(--orange-dark);

    color: var(--orange-dark);

    cursor: pointer;

    font-weight: 500;

    gap: 0.5em;

    .uploadIcon {
        font-size: 1.5em;
    }

    &:hover { 
        background: var(--orange-super-highlight);
    }
`

export const PixKey = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    background-color: var(--orange-super-highlight);
    color: var(--orange-dark);
`

export const CurrentBalance = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        font-size: 0.875rem;
    }
`

export const DayPayments = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1rem 0;

    border-bottom: 1px solid var(--line);

    header {
        margin-bottom: 1rem;
    }

    &:last-of-type {
        border-bottom: 0;
    }
`

export const Payment = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.875rem;

    padding: 1rem 0.5rem;

    border-bottom: 1px solid var(--line);

    &:last-of-type {
        border-bottom: 0;
    }
`
export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 3rem;
    height: 3rem;

    border-radius: 50%;

    background-color: var(--green-light);
    color: var(--green-dark);

    font-size: 2rem;
`

export const Description = styled.div`
    p {
        font-size: 0.875rem;
        color: var(--text-light);
    }
`

export const Amount = styled.strong`
    margin-left: auto;
`
