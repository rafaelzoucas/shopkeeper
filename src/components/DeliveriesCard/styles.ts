import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    background: white;

    padding: 1rem;

    border-radius: 0.75rem;

    margin-bottom: 1rem;
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    font-size: 2rem;
`

export const Footer = styled.footer`
    display: flex;
    flex-direction: row;

    button {
        background: transparent;
        
        color: var(--orange-default);
        font-weight: 500;
        
        white-space: nowrap;
    }
`

export const ActionButton = styled.button`
    width: 100%;
    
    padding: 0.5rem;
    
    gap: 0.5rem;   
    
    transition: background-color 0.2s;

    a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`

export const DeliveriesContainer = styled.div`
    display: flex;
    flex-direction: column;
        
    gap: 0.5rem;
`

export const Summary = styled.div`
    display: flex;
    align-items: center;
    
    span{
        display: flex;
        align-items: center;

        font-size: 1rem;

        gap: 0.5rem;

        ::after {
            content: '';

            width: 5px;
            height: 5px;

            border-radius: 50%;

            background: var(--line);

            margin-right: 0.5rem;
        }
    }

    strong {
        margin-right: 1rem;
        font-size: 0.875rem;
    }

    .md-expand {
        cursor: pointer;
    }
`  