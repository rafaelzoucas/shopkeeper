import { useState } from 'react'
import Modal from 'react-modal'
import { NewDeliveryForm } from '../NewDeliveryForm'

import {
    Header,
    NewDelivery
} from './styles'

import { MdAdd, MdArrowBack } from 'react-icons/md'

export function NewDeliveryButton() {
    const [isNewDeliveryFormModalOpen, setIsNewDeliveryFormOpen] = useState(false)

    function handleOpenNewDeliveryFormModal(){
        setIsNewDeliveryFormOpen(true)
    }

    function handleCloseNewDeliveryFormModal(){
        setIsNewDeliveryFormOpen(false)
    }

    return(
        <>
            <NewDelivery onClick={handleOpenNewDeliveryFormModal}>
                <MdAdd />
            </NewDelivery>

            <Modal
                isOpen={isNewDeliveryFormModalOpen} 
                onRequestClose={handleCloseNewDeliveryFormModal}
                className="react-modal-content"
            >
                <Header>
                    <button onClick={handleCloseNewDeliveryFormModal}>
                        <MdArrowBack />
                    </button>
                    
                    <h3>Solicitar entregador</h3>
                </Header>
                
                <NewDeliveryForm />
            </Modal>
        </>
    )
}