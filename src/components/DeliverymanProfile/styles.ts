import styled from "styled-components";

export const DataContainer = styled.div`
    padding: 1.5rem;
    border-radius: 0.75rem;
    background-color: var(--background);

    @media (max-width: 425px){
        margin-top: 1rem;
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 0.875rem;

    @media (max-width: 425px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const GoBackButton = styled.button`
    font-size: 1.875rem;
    padding: 0.25rem;
`

export const UserImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 8.5rem;
    min-width: 8.5rem;
    height: 8.5rem;
    min-height: 8.5rem;

    background: var(--orange-default);
    border-radius: 50%;
    line-height: 0;

    img {
        width: 8rem;
        height: 8rem;
        
        border-radius: 50%;
        border: 3px solid white;
    }
`

export const Data = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media(max-width: 425px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const Favorite = styled.button`
    max-width: 90px;
    padding: 0.5rem;

    gap: 0.25rem;
`

export const PIXKey = styled.button`
    max-width: 150px;
    padding: 0.5rem;

    gap: 0.25rem;

    .icon {
        font-size: 0.875rem
    }
`
export const WhatsApp = styled.button`
    max-width: 105px;
    padding: 0.5rem;

    gap: 0.25rem;

    .icon {
        font-size: 0.875rem
    }
`

export const Rate = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    font-size: 1.25rem;

    gap: 0.25rem;
`

export const Summary = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    gap: 0.5rem;

    margin-top: 0.5rem;

    @media (max-width: 425px) {
        display: flex;
        flex-direction: column;
    }
`

export const SummaryItem = styled.div`
    background-color: var(--background);
    
    padding: 1rem;
    
    border-radius: 0.75rem;
    
    header {
        display: flex;
        justify-content: space-between;
        
        .summaryIcon {
            font-size: 1.5rem;
            color: var(--orange-light);
        }
    }
`

export const Settings = styled.section`
    display: flex;
    flex-direction: column;

    margin-top: 1rem;

    
    
    gap: 0.5rem;    
    `

export const SettingsItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    padding: 1rem;

    border-radius: 0.75rem;
    
    background-color: var(--background);
    
    .toggle {
        font-size: 4rem;
    }

    .icon {
        font-size: 2rem;
    }
`