import React from 'react';
import { useEffect, useState } from 'react';

import { MdClose } from 'react-icons/md';

import { Container, Description } from './styles';
import './styles.css'

interface NotifyProps{
    title: string;
    message: string;
    type: 'warning' | 'info' | 'danger' | 'success' | 'loading';
	timeOut: number | null;
}

export function Snackbar(props: NotifyProps) {
    const [isSnackbarVisible, setIsSnackbarVisible] = useState(false)

    const oi = React.createRef<HTMLElement>();

    // setTimeout(() => {
    //     console.log(oi);
        
    //     oi.current!.textContent = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
    // }, 3000)

    if(props.timeOut !== null){
        setTimeout(() => {
            setIsSnackbarVisible(false)
        }, props.timeOut)
    }

    useEffect(() =>{
        setIsSnackbarVisible(true)
    }, [])

    return (
        <Container 
            data-notify="container" 
            className={
                `
                    col-xs-11 
                    col-sm-4 
                    alert 
                    alert-pastel-${props.type}
                `
            }
            state={isSnackbarVisible}
        >
            <Description>
                <span data-notify="title" ref={oi}>
                    {props.title}
                </span>

                <span data-notify="message">
                    {props.message}
                </span>
            </Description>

            <button
                type="button" 
                aria-hidden="true" 
                className="close" 
                onClick={() => setIsSnackbarVisible(false)}
            >
                <MdClose />
            </button>
        </Container>
    )
}