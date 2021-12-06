import { useState } from 'react'

import { Delivery } from '../Delivery'

import { 
    MdAdd, 
    MdExpandLess, 
    MdExpandMore,
    MdQuestionAnswer,
} from 'react-icons/md'

import { 
    Container,
    Summary, 
    DeliveriesContainer, 
    Header, 
    Footer, 
    ActionButton,
} from '../DeliveriesCard/styles'

import { Deliveryman } from '../Deliveryman'

export function DeliveriesCard() {
    const [isDeliveriesVisible, setIsDeliveriesVisible] = useState(true)
    
    function handleExpandCard() {
        isDeliveriesVisible 
        ? setIsDeliveriesVisible(false) 
        : setIsDeliveriesVisible(true)
    }

    return(
        <>
        <Container>
            <Header>
                <Deliveryman />

                <Summary>
                    <span>5 entregas</span>
                    <strong >R$ 30,50</strong>
                    
                    {
                        isDeliveriesVisible ? (
                            <MdExpandLess 
                                onClick={handleExpandCard}
                                className="md-expand"
                            />
                        ) : (
                            <MdExpandMore 
                                onClick={handleExpandCard}
                                className="md-expand"
                            />
                        )
                    }
                </Summary>
            </Header>

            <hr />

            {
                isDeliveriesVisible ? (
                    <>
                        <DeliveriesContainer>
                            <Delivery />
                            <Delivery />
                        </DeliveriesContainer>
                        <hr />
                    </>
                ) : (
                    null
                )
            }

            <Footer>
                <ActionButton>
                    <MdAdd />
                    Adicionar entrega
                </ActionButton>
                

                <ActionButton >
                    <a 
                        href="https://api.whatsapp.com/send?phone=5518996465807&fbclid=IwAR1aNtRPkUTX9Xl89Wv8dmkpSdqWpkiG7FgJeXu02rnCOWlW6wCVXWbteUo"
                        target="blank"
                    >
                    <MdQuestionAnswer />
                    Ajuda
                    </a>
                </ActionButton>
            </Footer>
        </Container>
        </>
    )
}