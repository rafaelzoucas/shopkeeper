import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    cursor: pointer;

    gap: 0.5rem;

    padding: 0.5rem;

    border-radius: 0.75rem;

    transition: background-color 0.2s;

    :hover {
        background-color: var(--background)
    }
`

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .chevronRight{
        font-size: 1.5rem;
    }
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
    
    span {
        font-size: 0.75rem;
    }
`

export const BodyContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const DeliveryData = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 1rem;
    width: 100%;
`

export const Address = styled.div`
    font-size: 1rem;
    text-transform: capitalize;

    p {
        font-size: 0.875rem;
        color: var(--text-light);
    }
`

export const DeliveryValue = styled.strong`
    white-space: nowrap;
`

export const HeaderDetails = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-bottom: 0.5rem;
`

export const HeaderButton = styled.button`
    padding: 0.5rem;
    
    font-size: 1.875rem;

    background-color: transparent;
`