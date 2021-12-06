import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;

    gap: 0.5rem;

    font-size: 1rem;
    
    cursor: pointer;

    img {
        width: 2.5rem;
        height: 2.5rem;
        
        border-radius: 50%;
        border: 2px solid white;
    }
    
    strong{
        display: flex;
        align-items: center;
        gap: 0.5rem;   
    }
`
export const UserImg = styled.div`
    position: relative;
    padding: 2px;

    background: var(--orange-default);
    border-radius: 50%;
    line-height: 0;
`

export const Status = styled.div`
    position: absolute;

    bottom: 0;
    right: 0;

    width: 0.875rem;
    height: 0.875rem;

    border-radius: 50%;
    border: 2px solid white;

    background: var(--green-dark);
`

export const Name = styled.div`
    display: flex;
    flex-direction: column;

    text-transform: capitalize;
`

export const Rate = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 0.875rem;

    gap: 0.25rem;
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