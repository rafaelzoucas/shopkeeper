import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 1rem;

    cursor: pointer;
    
    border-radius: 0.75rem;

    background: white;

    transition: background-color 0.2s;

    &:hover {
        background-color: var(--line);
    }

    .chevronRight{
        font-size: 1.5rem;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1.5rem;
`

export const Date = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    line-height: 1.5em;
`

export const Summary = styled.div``