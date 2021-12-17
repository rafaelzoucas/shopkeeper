import styled from 'styled-components'

export const Container = styled.header `
    display: flex;

    width: 100vw;
    height: 4rem;

    padding: 0rem 1rem;

    background: #fff;

    box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.01 );

    @media (max-width: 425px) {
        padding: 1rem 0 0;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    position: relative;

    width: 100%;
    max-width: 1366px;

    margin: 0 auto;

    padding: 0 1rem;
    
    img {
        cursor: pointer;
        
        width: 9.25rem;
        height: 2rem;
        
        @media (max-width: 478px) {
            display: none;
        }
    }

    @media(max-width: 425px) {
        padding: 0 1rem 1rem;
    }
`

export const Title = styled.div`
    display: flex;
    align-items: center;

    gap: 0.5rem;

    button {
        font-size: 2rem;
        padding: 0.25rem;

        background: transparent;
    }

    h3 {
        font-weight: 600;
    }

    @media (min-width: 425px) {
        display: none;
    }
`

export const Menu = styled.div`
    ul {
        display: flex;
        align-items: center;

        padding: 0;
        margin: 0;

        list-style: none;

        height: 4rem;
        
        li {
            display: flex;

            padding: calc(1.5rem - 1px);

            display: inline;

            transition: color 0.2s;
            
            &:hover {
                border-bottom: 2px solid var(--orange-default);
                
                color: var(--orange-default);
            }
        }
    }

    @media (max-width: 425px) {
        display: none;
    }
`

export const Account = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
        
    img {
        width: 45px;
        height: 45px;
        
        border-radius: 50%;

        cursor: pointer;
        
        @media (max-width: 769px) {
            display: none;
        }
    }
    
    .balance {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        
        text-align: right;
        line-height: 1.15rem;
        
        margin-right: 1rem;
        
        p {
            font-size: 0.875rem;
            
            strong {
                display: flex;
                flex-direction: row;
                align-items: baseline;
                font-size: 1.2rem;
                
                h3 {
                    margin-left: 0.25rem;
                }
            }
        }
    }
    
    .menu {
        @media (min-width: 769px) {
            display: none;
        }

        cursor: pointer;
        
        font-size: 2rem;
    }
`

export const MoreMenu = styled.div`
    position: absolute;
    
    top: 4rem;
    right: 0.5rem;
    
    min-width: 256px;
    
    background-color: white;
    box-shadow: 3px 3px 1rem rgba(0, 0, 0, 0.15);
    
    border-radius: 0.75rem;
    
    padding: 1rem;
    
    z-index: 10;
    
    transition: all 0.2s ease 0s, visibility 0.2s ease 0s;

    p {
        display: flex;
        align-items: center;

        padding: 1rem 1rem;

        margin: 0.5rem 0;

        border-radius: 0.75rem;
        
        &:hover { background: var(--background);}

        .icon {
            margin-right: 1rem;
            font-size: 1.5rem;
        }

        &:first-of-type {
            margin-top: 0;
        }
    }

    button {
        width: 100%;
        height: 3rem;

        gap: 0.25rem;

        background: var(--orange-light);

        color: #FFF;
        font-weight: 500;

        border-bottom: 5px solid var(--orange-dark);

        transition: border-bottom 0.15s, filter 0.2s;
        
        &:hover {
            border-bottom: 0;
            filter: brightness(0.9);
        }

        &:disabled {
            border: 0;
        }

        .icon {
            font-size: 1rem;
        }
    }
`