import {
    Balance,
    Container,
    CurrentBalance,
    Payment,
    Icon,
    Description,
    Amount,
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

export function Finance() {

    return(
        <Container>
            <Balance>
                <CurrentBalance>
                    <span>Saldo atual</span>
                    <h1>R$ 300,00</h1>
                </CurrentBalance>

                <AddBalance>
                    <h3>Adicionar saldo</h3>
                    
                    <BalanceItem>
                        <label htmlFor="">Chave PIX</label>
                        <PixKey>
                            <strong>
                                32.185.931/0001-06
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

                    <SubmitButton disabled>
                        Enviar comprovante
                    </SubmitButton>
                </AddBalance>
            </Balance>      

            <hr />

            <DayPayments>
                <header>
                    <span>27 Nov</span>
                </header>

                <Payment>
                    <Icon>
                        <FaDollarSign />
                    </Icon>

                    <Description>
                        <strong>Status do pagamento</strong>
                        <p>12:36</p>
                    </Description>

                    <Amount>
                        R$ 100,00
                    </Amount>
                </Payment>
            </DayPayments>
        </Container>
    )
}