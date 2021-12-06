import React, { useState } from "react";

import { 
    Circle,
    Container,
} from './styles'

export function Toggle(){
    const [isToggleOn, setIsToggleOn] = useState(false);

    return(
        <>
            <Container
                onClick={() => isToggleOn 
                    ? setIsToggleOn(false)
                    : setIsToggleOn(true)
                }
                isActive={isToggleOn}
            >
                <Circle 
                    isActive={isToggleOn} 
                />
            </Container>
        </>
    )
}