import {
    Balance,
    Container,
    CurrentBalance,
    Payment,
    Icon,
    Description,
    DayPayments,
    AddBalance,
    PixKey,
    BalanceItem,
    AddFileButton,
} from "./styles"

import { FaDollarSign } from "react-icons/fa"
import { 
    MdContentCopy, 
    MdFileUpload, 
} from "react-icons/md"
import { SubmitButton } from "../../styles/MaterialDesign"

import { useFinance } from "../../contexts/FinanceProvider/useFinance"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

interface EventProps {
    color: string,
    date: string,
    message: string,
    title: string,

}

export function Finance() {
    const currentBalance = useFinance()
    const [events, setEvents] = useState<EventProps[]>([])
    
    const pixKey = '32.185.931/0001-06'

    useEffect(() => {
        api.post(
            'shop/payment-historic/model', 
            {token: localStorage.getItem('user-token')}
        ).then(({data}) => {
            setEvents(data.events)
        })
    }, [])

    function copyToClipboard() {
        var textField = document.createElement('textarea')
        textField.innerText = pixKey
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }

    function sendFile() {

    }

    return(
        <Container>
            <Balance>
                <CurrentBalance>
                    <span>Saldo atual</span>
                    <h1>
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(currentBalance)}
                    </h1>
                </CurrentBalance>

                <AddBalance onSubmit={sendFile}>
                    <h3>Adicionar saldo</h3>
                    
                    <BalanceItem>
                        <label htmlFor="">Chave PIX</label>
                        <PixKey
                            type="button" 
                            onClick={copyToClipboard}
                        >
                            <strong>
                                {pixKey}
                            </strong>

                            <MdContentCopy />
                        </PixKey>
                    </BalanceItem>
                    
                    <BalanceItem>
                        <label>Valor a ser adicionado</label>
                        <input type="text" placeholder="R$ 0,00" required />
                    </BalanceItem>
                    
                    <BalanceItem>
                        <label>Comprovante</label>
                        <AddFileButton htmlFor="fileBtn">
                            <MdFileUpload className="uploadIcon" />
                            Escolher o arquivo de comprovante
                        </AddFileButton>
                        <input id="fileBtn" type="file" required/>
                    </BalanceItem>

                    <SubmitButton type="submit" disabled>
                        Enviar comprovante
                    </SubmitButton>
                </AddBalance>
            </Balance>      

            <hr />

            <DayPayments>
                <header>
                    <span>Histórico de pagamentos</span>
                </header>
                    {events.map(event => (
                        <Payment key={event.date}>
                            <Icon 
                                statusColor={event.color}
                            >
                                <FaDollarSign />
                            </Icon>

                            <Description>
                                <strong>
                                    {event.title}
                                </strong>
                                <p>
                                    {event.message}
                                </p>
                            </Description>

                            {/* <Amount>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(currentBalance)}
                            </Amount> */}
                        </Payment>
                    ))}
            </DayPayments>
        </Container>
    )
}