import { useState } from 'react'
import Modal from 'react-modal'

import { DeliveryDetails } from '../DeliveryDetails'

import { format } from 'date-fns'

import {
    MdArrowBack,
    MdChevronRight,
    MdHourglassTop,
    MdMoreVert,
    MdSchedule 
} from "react-icons/md"
import { 
    FaSpinner 
} from 'react-icons/fa'

import { 
    BodyContainer, 
    Container, 
    DeliveryData, 
    Address, 
    DeliveryValue, 
    Header, 
    TagsContainer, 
    Tag,
    HeaderDetails,
    HeaderButton,
} from "../Delivery/styles"

interface DeliveryProps {
    id: string,
    addressName: string
    addressReference: string | null,
    addressNumber: string |null,
    addressComplement: string | null,
    observation: string | null,
    status: string,
    creationDate: string,
    thereWasUnforeseen: boolean | null,
    totalTime: Number | null,
    unforeseens: Array<string>,
    currentStep: string,
    valueToDeliveryman: string,
    prepareTime: string | null,
    canceledBy: string | null,
    allowRetryQueue: boolean
}

export function Delivery(delivery: DeliveryProps) {
    const [isDeliveryDetailsModalOpen, setIsDeliveryDetailsModalOpen] = useState(false)

    function handleCloseDeliveryDetailsModal() {
        setIsDeliveryDetailsModalOpen(false)
    }

    return (
        <>
            <Container onClick={() => setIsDeliveryDetailsModalOpen(true)}>
                <Header>
                    <TagsContainer>
                        <Tag className="inProgress">
                            <FaSpinner />
                            {/* <MdCheck /> */}
                            <span>{delivery.status}</span>
                        </Tag>
                        <Tag>
                            <MdHourglassTop />
                            <span>
                                {
                                    delivery.totalTime
                                }
                            </span>
                        </Tag>
                        <Tag>
                            <MdSchedule />
                            <span>
                                {
                                    format(new Date(delivery.creationDate), 'd, MMM - HH:mm')
                                }
                            </span>
                        </Tag>
                    </TagsContainer>
                    <MdChevronRight className="chevronRight" />
                </Header>

                <BodyContainer>
                    <DeliveryData>
                        <span>#{delivery.id}</span>
                        
                        <Address>
                            <strong>{`${delivery.addressName}, ${delivery.addressNumber}`}</strong>
                            <p>{delivery.addressReference}</p>
                        </Address>
                    </DeliveryData>

                    <div>
                        <DeliveryValue>
                            {
                                new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(parseFloat(delivery.valueToDeliveryman))
                            }
                        </DeliveryValue>
                    </div>
                </BodyContainer>
            </Container>

            <Modal
                isOpen={isDeliveryDetailsModalOpen}
                onRequestClose={handleCloseDeliveryDetailsModal}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
                <HeaderDetails>
                    <HeaderButton onClick={handleCloseDeliveryDetailsModal}>
                        <MdArrowBack />
                    </HeaderButton>
                    <h3>
                        Detalhes da entrega
                    </h3>
                    <HeaderButton>
                        <MdMoreVert />
                    </HeaderButton>
                </HeaderDetails>
                <DeliveryDetails
                    id={delivery.id}
                    addressName={delivery.addressName}
                    addressReference={delivery.addressReference}
                    addressNumber={delivery.addressNumber}
                    addressComplement={delivery.addressComplement}
                    observation={delivery.observation}
                    status={delivery.status}
                    creationDate={delivery.creationDate}
                    thereWasUnforeseen={delivery.thereWasUnforeseen}
                    totalTime={delivery.totalTime}
                    unforeseens={delivery.unforeseens}
                    currentStep={delivery.currentStep}
                    valueToDeliveryman={delivery.valueToDeliveryman}
                    prepareTime={delivery.prepareTime}
                    canceledBy={delivery.canceledBy}
                    allowRetryQueue={delivery.allowRetryQueue}
                />
            </Modal>
        </>
    )
}