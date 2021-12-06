import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    gap: 0.5rem;
`

export const DateTime = styled.div`
    font-size: 0.875rem;
    color: var(--text-default);
`

export const TagsContainer = styled.div`
    display: flex;
    flex-direction: row;
    
    gap: 0.5rem;
    
    .inProgress {
        background: var(--blue-light);
        color: var(--blue-dark);
    }
    
    .finished {
        background: var(--green-light);
        color: var(--green-dark);
    }
`

export const Tag = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 0.25rem 0.5rem;

    background: var(--line);

    border-radius: 10rem;

    font-size: 0.75rem;
    font-weight: 500;

    gap: 0.25rem;
`

export const Label = styled.label`
    display: flex;

    margin-top: 0.5rem 0.25rem;

    gap: 0.2rem;
    
    font-size: 0.75rem;
    color: var(--text-light);
`

export const Address = styled.div`
    margin: 0.25rem 0;
    font-size: 1rem;
    
    p {
        font-size: 0.875rem;
        color: var(--text-light);
    }
`

export const AddDelivery = styled.button`

    padding: 0.25rem;
    background: transparent;

    color: var(--orange-dark);
    font-weight: 500;

`

export const Summary = styled.div`
    display: flex;
    flex-direction: column;

    gap: 0.25rem;

    font-size: 0.875rem;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`