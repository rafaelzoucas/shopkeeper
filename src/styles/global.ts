import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f8f8f8;

        --line: #EFEFEF;

        --text-light: #8D8D8D;
        --text-default: #777777;
        --text-dark: #5F5F5F;

        --orange-super-highlight: #FFECE3;
        --orange-light: #FB834F;
        --orange-default: #E66127;
        --orange-dark: #F2520C;

        --green-light: #D0FFE9;
        --green-default: #8CF0C0;
        --green-dark: #12854E;
        
        --blue-light: #D0E9FF;
        --blue-default: #8CC0F0;
        --blue-dark: #124785;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html { 
        overflow-x: hidden;

        @media (max-width: 1440px) {
            font-size: 93.75%;
        }

        @media (max-width: 1366px) {
            font-size: 75%;
        }

        @media (max-width: 375px) {
            font-size: 81.25%;
        }
        
        @media (max-width: 320px) {
            font-size: 75%;
        } 

        /* @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }*/
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        color: var(--text-default);
    }
    
    body, input, textarea, button {
        color: var(--text-default);
        font-family: Roboto, arial, sans-serif;
        font-weight: 400;
    }

    input{
        width: 100%;
        height: 3.5rem;

        margin-top: 0.25rem;

        padding: 0.875rem;

        border: none;
        border-radius: 0.75rem;

        background: var(--background);

        font-size: 0.875rem;
    }
    
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        
        cursor: pointer;
        border-radius: 0.75rem;
        border: 0;

        transition: filter 0.2s;

        &:not(:disabled):hover {
            filter: brightness(0.95);
        }
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    hr {
        border: 0;
        border-bottom: 1px solid var(--line);

        margin: 0.75rem 0;
    }

    .react-modal-overlay {
        position: fixed;
        
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background: rgba(0, 0, 0, 0.5);

        display: flex;
        align-items: center;
        justify-content: center;

        z-index: 20;
    }

    .react-modal-content {
        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 1rem;

        background: white;

        border-radius: 0.75rem;

        min-width: 425px;
        max-height: 800px;

        

        outline: 0;
        
        @media (max-width: 425px) {
            justify-content: flex-start;
            
            width: 100%;
            min-width: 0;
            height: 100%;
            
            border-radius: 0;
        }
    }

    a{
        text-decoration: none;
        color: inherit;
    }
`