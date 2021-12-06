import styled from "styled-components";

interface FilterProps {
    isActive: boolean;
}

export const Container = styled.div`
    padding: 0 0 1rem 0;
    h3{
        margin-bottom: 0.5rem;
    }
`

export const Filter = styled.div`
    display: flex;
    justify-content: space-between;

    div { 
        display: flex;
        
        gap: 0.5rem;
    }
`

export const Button = styled.button<FilterProps>`
    padding: 0.875rem;
    margin: 0 0 1rem ;
    
    background-color: transparent;
    
    border: 2px solid ${(props) => props.isActive ? '#FB834F' : '#EFEFEF'};
    color: ${(props) => props.isActive ? '#FB834F' : null};
    font-weight: ${(props) => props.isActive ? '600' : null};
    `

export const CalendarButton = styled.button`
    padding: 0.875rem;
    margin: 0 0 1.5rem;
    font-size: 1rem;


`

export const Summary = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 468px){
        flex-direction: column-reverse;

        gap: 1rem;
    }

    
    div { 
        display: flex;

        gap: 0 1rem;
    }
`

export const SummaryItem = styled.div`
    display: flex;
    flex-direction: column; 

`