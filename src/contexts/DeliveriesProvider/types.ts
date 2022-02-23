import { ReactNode } from "react";

export interface DeliveryContextProps {
    getDeliveriesProps: () => void
}

export interface DeliveryCardProps {
    deliveryman: {
        id: string,
        deliverymanName: string,
        deliverymanRatingAverage: string,
        pixKey: string,
        stars: string,
        phone: string
    }, 

    deliveries: {
        id: string,
        addressName: string,
        addressReference: string | null,
        addressNumber: string | null,
        addressComplement: string | null,
        observation: string | null,
        status: string,
        creationDate: string,
        thereWasUnforeseen: string,
        totalTime: Number | null,
        unforeseens: Array<string>,
        currentStep: string,
        canceledBy: string | null,
        allowRetryQueue: boolean,
        valueToDeliveryman: string,
        prepareTime: string
    }[]
}

export interface DeliveriesProviderProps {
    children: ReactNode;
}