import styled from "styled-components";

interface NotifyProps{
    state: boolean
}

export const Container = styled.div<NotifyProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    opacity: ${(props) => props.state ? 1 : 0};

    transform: 
        ${(props) => props.state 
            ? `translate3d(0, 0, 0)`
            : `translate3d(200%, 0, 0)`
        }
    ;

    border-radius: 0.75rem;

    button {
        padding: 0.1rem;
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: transparent;

        font-size: 1.5rem;
    }
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
`