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

export function DeliveryDetails() {
    return(
        <Container>
            

            <strong>Entrega #1234</strong>

            <Deliveryman />

            <DateTime>
                30/09/2021 - 23:22
            </DateTime>

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

            <hr />

            <Address>
                <Label>
                    <MdOutlineFmdGood />
                    Rua de destino
                </Label>
                
                <strong>Av Integração, 425 - ap 12</strong>
                <p>Jardim Nossa Senhora de Fátima</p>
            </Address>

            <hr />

            <div>
                <Label>
                    <MdNotes />
                    Observações (opcional)
                </Label>
                <strong>
                    Troco para R$ 50,00
                </strong>
            </div>

            <hr />

            <div>
                <Label>
                    <MdTimer />
                    Tempo de preparo
                </Label>
                <strong>
                    15 minutos
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
