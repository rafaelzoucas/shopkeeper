import { 
    MdAdd,
    MdHourglassTop,
    MdNotes,
    MdOutlineFmdGood,
    MdSchedule,
    MdTimer
} from 'react-icons/md' 

import { 
    Container,
    DateTime,
    TagsContainer,
    Tag,
    Label,
    Address,
    AddDelivery,
    Summary
} from './styles'

import { Deliveryman } from '../Deliveryman'
import { FaSpinner } from 'react-icons/fa'

interface DeliveryProps {
    id: string,
    addressName: string
    addressReference: string | null,
    addressNumber: string | null,
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

export function DeliveryDetails(delivery: DeliveryProps) {
    return(
        <Container>
            <strong>Entrega #{delivery.id}</strong>

            <Deliveryman 
                deliverymanName="Mauro Vinicius"
                deliverymanRatingAverage="4.9"
            />

            <DateTime>
                {delivery.creationDate}
            </DateTime>

            <TagsContainer>
                <Tag className="inProgress">
                    <FaSpinner />
                    {/* <MdCheck /> */}
                    <span>{delivery.status}</span>
                </Tag>
                <Tag>
                    <MdHourglassTop />
                    <span>{delivery.totalTime}</span>
                </Tag>
            </TagsContainer>

            <hr />

            <Address>
                <Label>
                    <MdOutlineFmdGood />
                    Rua de destino
                </Label>
                
                <strong>{`${delivery.addressName}, ${delivery.addressNumber}`}</strong>
                <p>{delivery.addressComplement}</p>
            </Address>

            <hr />

            <div>
                <Label>
                    <MdNotes />
                    Observações (opcional)
                </Label>
                <strong>
                    {delivery.observation}
                </strong>
            </div>

            <hr />

            <div>
                <Label>
                    <MdTimer />
                    Tempo de preparo
                </Label>
                <strong>
                    {delivery.prepareTime}
                </strong>
            </div>

            <hr />

            <AddDelivery>
                <MdAdd />
                Adicionar entrega
            </AddDelivery>

            <hr />

            <Summary>
                <div>
                    <span>Distância</span>
                    <strong>2.4 Km</strong>
                </div>

                <div>
                    <span>Saldo descontado</span>
                    <strong>R$ 1,00</strong>
                </div>

                <div>
                    <span>Para o entregador</span>
                    <strong>R$ 5,50</strong>
                </div>

                <div>
                    <span>Total</span>
                    <h2>R$ 6,50</h2>
                </div>
            </Summary>
        </Container>
    )
}
