import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    max-width: 1366px;

    padding: 1rem 2rem;
    margin: 0 auto;

    display: flex;

    gap: 1rem;

    aside {
        @media (max-width: 768px) {
            display: none;
        }
    }

    @media (max-width: 425px){
        padding: 0 0.5rem;
    }
`

export const Main = styled.main`
    width: 100%;
`