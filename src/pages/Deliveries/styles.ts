import styled from "styled-components";

interface FilterProps {
    isActive: boolean;
}

export const Line = styled.hr`
    @media(max-width: 425px){
        display: none;
    }
`

export const Tabs = styled.div`
    display: flex;

    margin-bottom: 1rem;
    
    gap: 0.5rem;
    
    @media (max-width: 425px) {
        display: grid;
        grid-template-columns: 1fr 1fr;

        gap: 0;

        width: 100vw;

        margin-left: -0.5rem;

        background-color: #fff;
    }
`

export const Tab = styled.button<FilterProps>`
    font-size: 1rem;
    padding: 1rem;

    background-color: ${(props) => props.isActive ? '#FB834F' : 'transparent'};
    color: ${(props) => props.isActive ? '#FFF' : ''};
    font-weight: ${(props) => props.isActive ? '500' : ''};

    border: 1px solid var(--line);

    transition: 
        background-color 0.2s, 
        color 0.2s, 
        font-weight 0.2s, 
        filter 0.2s, 
        border-bottom 0.2s
    ;

    :hover {
        filter: brightness(0.9);
    }

    @media (max-width: 425px) {
        padding: 1.5rem 1rem;
        background: transparent;
        
        border-radius: 0;
        border: 0;
        border-bottom: 3px solid ${(props) => props.isActive 
            ? '#E66127' 
            : '#FFF'}
        ;

        color: ${(props) => props.isActive 
            ? '#E66127' 
            : null}
        ;
    }
`