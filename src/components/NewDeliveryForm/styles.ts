import styled from "styled-components";

export const Container = styled.form`
    width: 100%;
    
    padding: 1rem;
    
    background-color: #fff;
    
    border-radius: 0.75rem;
    
    @media (max-width: 425px) {
        background-color: transparent;
        padding: 0;
    }
    
    @media (min-width: 425px) {
        max-width: 425px;
        min-width: 415px;
    }
`

export const Label = styled.label`
    display: flex;

    margin-top: 0.5rem 0.25rem;

    gap: 0.2rem;
    
    font-size: 0.75rem;
    color: var(--text-light);
`

export const SetButton = styled.button`
    display: flex;

    gap: 0.25rem;

    background-color: transparent;

    color: var(--orange-dark);

    font-weight: 500;
`

export const ChosenCollectAddress = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        max-width: 300px;

        font-size: 0.875rem;
        font-weight: 500;

        text-transform: capitalize;
    }
`

export const InputForm = styled.div`
    margin: 0.25rem 0;
`

export const ContainerNumberAndComplement = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`

export const ContainerRadioButton = styled.div`
    display: flex;
    flex-direction: column;
    
    .radioButtonContent {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 0.5rem;

        margin-top: 0.5rem;
    }
`

interface RadioButtonProps {
    isActive: boolean;
}

export const RadioButton = styled.button<RadioButtonProps>`
    display: flex;
    flex-direction: row;
    align-items: center;

    text-align: left;

    gap: 0.5rem;

    padding: 0.5rem;

    font-size: 0.875rem;

    background: transparent;

    color: ${(props) => props.isActive 
        ? '#F2520C'
        : ''}
    ;
    
    border: 1px solid ${(props) => props.isActive 
        ? '#F2520C'
        : 'transparent'}
    ;

    font-weight: ${(props) => props.isActive
        ? '600'
        : ''
    };

    transition: border 0.2s, color 0.2s, font-weight 0.1s;

    :hover {
        border: 1px solid var(--orange-light);
        color: var(--orange-light);
        font-weight: 600;
    }

    .icon {
        font-size: 2.25rem;
        margin-bottom: 0.25rem;
    }

    .setPreparationTime {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        width: 100%;

        font-size: 1.5rem;
        font-weight: 500;

        div {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 3rem;
            height: 3rem;

            border-radius: 0.75rem;

            font-size: 1.5rem;

            background-color: var(--line);

            transition: background-color 0.2s, color 0.2s;

            :hover {
                background-color: var(--orange-light);
                color: #FFF;
            }
        }
    }
`

export const DeliverymanContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        align-items: center;

        gap: 0.2rem;

        .iconDeliveryman {
            font-size: 1.875rem;
        }
    }

    p {
        max-width: 280px;

        font-size: 0.875rem;
        font-weight: 500;
    }
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

    border-radius: 50%;

    transition: background-color 0.2s;

    &:hover { 
        background-color: var(--background);
    }
`

export const ModalContainer = styled.div`
    overflow-y: auto;
`

export const ModalItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    border-radius: 0.75rem;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    
    .iconCheck {
        display: none;
        
        font-size: 1.625rem;
    }
    
    &:last-of-type {
        margin-bottom: 0;
    }

    &:hover {
        cursor: pointer;
        background-color: var(--background);
        
        .iconCheck {
            display: flex;
            color: var(--text-default);
        }
    }
`

export const ModalItemActions = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const DisfavorButton = styled.button`
    background-color: transparent;
    font-size: 1.5rem;

    transition: color 0.2s;

    &:hover {
        color: var(--orange-default);
    }
` 

export const ChooseBySystem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    .iconRandom {
        font-size: 1.875rem;
    }
`

export const NewModalItemButton = styled.button`
    padding: 1rem;
    
    background-color: transparent;

    font-size: 0.875rem;
    font-weight: 500;

    color: var(--orange-dark);
`

export const NewModalItemForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`