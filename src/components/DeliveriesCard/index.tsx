import { useEffect, useState } from 'react'

import { Delivery } from '../Delivery'

import { DeliveryCardProps } from '../../contexts/DeliveriesProvider/types'

import { 
    MdExpandLess, 
    MdExpandMore,
} from 'react-icons/md'
import { FaWhatsapp } from "react-icons/fa";

import { 
    Container,
    Summary, 
    DeliveriesContainer, 
    Header, 
    Footer, 
    ActionButton,
} from '../DeliveriesCard/styles'

import { Deliveryman } from '../Deliveryman'

export function DeliveriesCard(props: DeliveryCardProps) {
    const [isDeliveriesVisible, setIsDeliveriesVisible] = useState(true)
    const [deliveriesProps] = useState(props.deliveries)
    const [totalToPay, setTotalToPay] = useState(0)

    deliveriesProps.map(delivery => 
       setTotalToPay(totalToPay + parseFloat(delivery.valueToDeliveryman)) 
    )
    
    function handleExpandCard() {
        isDeliveriesVisible 
        ? setIsDeliveriesVisible(false)
        : setIsDeliveriesVisible(true)
    }

    return(
        <Container>
            <Header>
                <Deliveryman 
                    deliverymanName={props.deliveryman.deliverymanName}
                    deliverymanRatingAverage={props.deliveryman.deliverymanRatingAverage}
                />

                <Summary>
                    <span>{deliveriesProps.length} entregas</span>
                    <strong>
                        {
                            new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(totalToPay)
                        }
                    </strong>
                    
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
                            {
                              deliveriesProps.filter(value => value.status !== "canceled").map((deliveryProps) => 
                                <Delivery
                                    key={deliveryProps.id}
                                    id={deliveryProps.id}
                                    addressName={deliveryProps.addressName}
                                    addressReference={deliveryProps.addressReference}
                                    addressNumber={deliveryProps.addressNumber}
                                    addressComplement={deliveryProps.addressComplement}
                                    observation={deliveryProps.observation}
                                    status={deliveryProps.status}
                                    creationDate={deliveryProps.creationDate}
                                    thereWasUnforeseen={deliveryProps.thereWasUnforeseen === 'true'}
                                    totalTime={deliveryProps.totalTime}
                                    unforeseens={deliveryProps.unforeseens}
                                    currentStep={deliveryProps.currentStep}
                                    valueToDeliveryman={deliveryProps.valueToDeliveryman}
                                    prepareTime={deliveryProps.prepareTime}
                                    canceledBy={deliveryProps.canceledBy}
                                    allowRetryQueue={deliveryProps.allowRetryQueue}
                                />
                              )  
                            }
                        </DeliveriesContainer>
                        <hr />
                    </>
                ) : (
                    null
                )
            }

            <Footer>
                {/* <ActionButton>
                    <MdAdd />
                    Adicionar entrega
                </ActionButton> */}

                <ActionButton >
                    <a 
                        href={`https://api.whatsapp.com/send?phone=55${props.deliveryman.phone}&fbclid=IwAR1aNtRPkUTX9Xl89Wv8dmkpSdqWpkiG7FgJeXu02rnCOWlW6wCVXWbteUo`}
                        target="blank"
                    >
                        <FaWhatsapp />
                        Conversar com {props.deliveryman.deliverymanName}
                    </a>
                </ActionButton>
            </Footer>
        </Container>
    )
}