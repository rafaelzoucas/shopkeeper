import React, { useState } from "react";
import Modal from 'react-modal'

import { DeliveryDetails } from '../../DeliveryDetails'

export function DeliveryDetailsModal() {
    const [isDeliveryDetailsModalOpen, setIsDeliveryDetailsModalOpen] = useState(false)

    function handleCloseDeliveryDetailsModal() {
        setIsDeliveryDetailsModalOpen(false)
    }

    return(
        <Modal
            isOpen={isDeliveryDetailsModalOpen}
            onRequestClose={handleCloseDeliveryDetailsModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <DeliveryDetails />
        </Modal>
    )
}