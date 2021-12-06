import { useState } from 'react'
import Modal from 'react-modal'
import { DeliveryDetails } from '../DeliveryDetails'

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


export function Delivery() {
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
                            <span>Aguardando</span>
                        </Tag>
                        <Tag>
                            <MdHourglassTop />
                            <span>19:00</span>
                        </Tag>
                        <Tag>
                            <MdSchedule />
                            <span>Hoje - 12:56</span>
                        </Tag>
                    </TagsContainer>
                    <MdChevronRight className="chevronRight" />
                </Header>

                <BodyContainer>
                    <DeliveryData>
                        <span>#1234</span>
                        
                        <Address>
                            <strong>Av Integração, 425</strong>
                            <p>Jardim Nossa Senhora de Fátima</p>
                        </Address>
                    </DeliveryData>

                    <div>
                        <DeliveryValue>
                            R$ 15,50
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
                <DeliveryDetails />
            </Modal>
        </>
    )
}