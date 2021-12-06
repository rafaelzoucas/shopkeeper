import React, { useState } from "react";
import Modal from 'react-modal'

import { DeliverymanProfile } from '../../DeliverymanProfile'

export function DeliverymanProfileModal() {
    const [isDeliverymanProfileModalOpen, setIsDeliverymanProfileModalOpen] = useState(false)

    function handleCloseDeliverymanProfileModal() {
        setIsDeliverymanProfileModalOpen(false)
    }

    return(
        <Modal
            isOpen={isDeliverymanProfileModalOpen}
            onRequestClose={handleCloseDeliverymanProfileModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >    
            <DeliverymanProfile />
        </Modal>
    )
}