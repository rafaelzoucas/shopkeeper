import styled from "styled-components";

interface ToggleProps {
    isActive: boolean;
}

export const Container = styled.div<ToggleProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    width: 3.5rem;

    padding: 0.25rem;

    border-radius: 10rem;

    background-color: ${(props) => props.isActive
            ? '#F2520C'
            : '#8D8D8D'
        }
    ;

    transition: background-color 0.5s;
`

export const Circle = styled.div<ToggleProps>`
    width: 1.25rem;
    height: 1.25rem;

    margin: ${(props) => props.isActive
            ? '0 -1.75rem 0 0'
            : '0 0 0 -1.75rem'
        }
    ;

    border-radius: 50%;

    background-color: ${(props) => props.isActive
            ? '#FFFFFF'
            : '#EFEFEF'
        }
    ;

    transition: background-color 0.3s, margin-left ease-out 0.05s;
`