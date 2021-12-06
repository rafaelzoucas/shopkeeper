import styled from "styled-components";

export const NewDelivery = styled.button`
    position: fixed;

    bottom: 2rem;
    right: 1.5rem;

    width: 4rem;
    height: 4rem;

    border-radius: 50%;

    font-size: 1.875rem;

    color: #FFF;
    background-color: var(--orange-dark);

    box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.2);

    @media (min-width: 769px) {
        display: none;
    }
`

export const Header = styled.header`
    display: flex;
    align-items: center;

    margin-bottom: 1rem;

    gap: 0.5rem;

    @media(min-width: 768px) {
        button {
            display: none;
        }
    }

    button {
        background: transparent;
        padding: 0.5rem 0.5rem 0.5rem 0;

        font-size: 1.875rem;
    }
`