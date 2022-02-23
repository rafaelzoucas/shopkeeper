import styled from "styled-components";

export const SubmitButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 4rem;

    gap: 0.25rem;

    background: var(--orange-light);

    color: #FFF;
    font-weight: 500;
    font-size: 1rem;

    border-bottom: 5px solid var(--orange-dark);

    transition: border-bottom 0.15s, filter 0.2s;
    
    &:hover {
        border-bottom: 0;
        filter: brightness(0.9);
    }

    &:disabled {
        border: 0;
    }

    .icon {
        font-size: 1rem;
    }
`