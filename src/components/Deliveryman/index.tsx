import { useState } from 'react'
import Modal from 'react-modal'

import { DeliverymanProps } from '../../contexts/DeliverymanProvider/types'

import {
    Container,
    HeaderButton,
    HeaderDetails,
    Name,
    Rate,
    Status,
    UserImg
} from './styles'
import { FaStar } from 'react-icons/fa'

import deliverymanProfileImg from '../../assets/deliveryman.png'
import { DeliverymanProfile } from '../DeliverymanProfile'
import { MdArrowBack, MdMoreVert } from 'react-icons/md'

export function Deliveryman(props: DeliverymanProps) {
    const [isDeliverymanProfileModalOpen, setIsDeliverymanProfileModalOpen] = useState(false)

    function handleCloseDeliverymanProfileModal() {
        setIsDeliverymanProfileModalOpen(false)
    }
    
    return(
        <>
        <Container onClick={() => setIsDeliverymanProfileModalOpen(true)}>
            <UserImg>
                <img src={deliverymanProfileImg} alt="Foto do entregador" width="100px" />
                <Status />
            </UserImg>
            
            <Name>
                <strong>{props.deliverymanName}</strong>

                <Rate>
                    <FaStar />
                    <strong>{props.deliverymanRatingAverage}</strong>
                </Rate>
            </Name>
        </Container>

        <Modal
            isOpen={isDeliverymanProfileModalOpen}
            onRequestClose={handleCloseDeliverymanProfileModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <HeaderDetails>
                <HeaderButton onClick={handleCloseDeliverymanProfileModal}>
                    <MdArrowBack />
                </HeaderButton>
                <h3>
                    Perfil do entregador
                </h3>
                <HeaderButton>
                    <MdMoreVert />
                </HeaderButton>
            </HeaderDetails>  
            <DeliverymanProfile 
                deliverymanName="Mauro Vinicius"
                deliverymanRatingAverage="4.9"
                pixKey="test"
            />
        </Modal>
        </>
    )
}