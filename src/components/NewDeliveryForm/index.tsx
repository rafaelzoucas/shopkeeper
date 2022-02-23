import { useState } from "react"
import Modal from 'react-modal'
import { Deliveryman } from "../Deliveryman"
import  { CollectAddress } from '../CollectAddress'

import { 
    MdMyLocation, 
    MdNotes, 
    MdCheckCircle, 
    MdAdd, 
    MdRemove, 
    MdShuffle,  
    MdTimer, 
    MdOutlineFmdGood,
    MdOutlineEditLocationAlt,
    MdManageAccounts,
    MdDoubleArrow,
    MdClose,
    MdArrowBack,
    MdVpnKey,
    MdDelete,
} from "react-icons/md"

import { 
    ChooseBySystem, 
    ChosenCollectAddress, 
    Container,
    ContainerNumberAndComplement,
    ContainerRadioButton,
    DeliverymanContainer,
    DisfavorButton,
    HeaderButton,
    HeaderDetails,
    InputForm,
    Label,
    ModalContainer,
    ModalItem,
    ModalItemActions,
    NewModalItemButton,
    NewModalItemForm,
    RadioButton,
    SetButton,
    Summary,
} from "../NewDeliveryForm/styles"
import { FaHeartBroken } from "react-icons/fa"
import { SubmitButton } from "../../styles/MaterialDesign"
import { useFinance } from "../../contexts/FinanceProvider/useFinance"

export function NewDeliveryForm() {
    const [timeCounter, setTimeCounter] = useState(5)
    const [collectAddress, setCollectAddress] = useState('')
    const [addressName, setAddressName] = useState('')
    const [addressNumber, setAddressNumber] = useState('')
    const [addressComplement, setAddressComplement] = useState('')
    const [observations, setObservations] = useState('')
    const [deliveryman, setDeliveryman] = useState('')

    const [preparationTime, setPreparationTime] = useState('ready')
    const [isCollectAddressesModalOpen, setIsCollectAddressesModalOpen] = useState(false)
    const [isNewCollectAddressVisible, setIsNewCollectAddressVisible] = useState(false)
    const [isDeliverymenModalOpen, setIsDeliverymenModalOpen] = useState(false)
    const [isNewDeliverymanVisible, setIsNewDeliverymanVisible] = useState(false)

    const currentBalance = useFinance()

    function incrementTime() {
        setTimeCounter(timeCounter + 5)
    }
    
    function decrementTime() {
        setTimeCounter(timeCounter - 5)
    }

    function handleCloseCollectAddressesModal() {
        setIsCollectAddressesModalOpen(false)
        setIsNewCollectAddressVisible(false)
        setIsNewDeliverymanVisible(false)
    }
    
    function handleCloseDeliverymenModal() {
        setIsDeliverymenModalOpen(false)
        setIsNewCollectAddressVisible(false)
        setIsNewDeliverymanVisible(false)
    }

    function handleNewModalItem() {
        setIsNewCollectAddressVisible(false)
        setIsNewDeliverymanVisible(false)
    }

    return(
        <>
            <Container>
                <ChosenCollectAddress>
                    <div>
                        <Label>
                            <MdMyLocation />
                            Endereço de retirada
                        </Label>

                        <p>rua lions club de assis, 435 - Conjunto Habitacional Irmã Catarina</p>
                    </div>

                    <SetButton type="button" onClick={() => setIsCollectAddressesModalOpen(true)}>
                        <MdOutlineEditLocationAlt />
                        Alterar
                    </SetButton>
                </ChosenCollectAddress>

                <hr className="" />

                <InputForm>
                    <Label>
                        <MdOutlineFmdGood />
                        Rua de destino
                    </Label>
                    <input 
                        type="text" 
                        placeholder="Rua onde o entregador levará o pedido" 
                        required />
                </InputForm>

                <ContainerNumberAndComplement>
                    <InputForm>
                        <Label>
                            <MdOutlineFmdGood />
                            Número do destino
                        </Label>
                        <input type="number" placeholder="123" required />
                    </InputForm>

                    <InputForm>
                        <Label>
                            <MdOutlineFmdGood />
                            Complemento (opcional)
                        </Label>
                        <input type="text" placeholder="Ap 12, Casa 5, Fundos" />
                    </InputForm>
                </ContainerNumberAndComplement>

                <InputForm>
                    <Label>
                        <MdNotes />
                        Observações (opcional)
                    </Label>
                    <input type="text" placeholder="Nome do cliente, valor, referencia..." />
                </InputForm>

                <hr />

                <ContainerRadioButton>
                    <Label>
                        <MdTimer />
                        Tempo até estar pronto para retirada
                    </Label>

                    <div className="radioButtonContent">
                        <RadioButton 
                            onClick={() => setPreparationTime('ready')}
                            isActive={preparationTime === 'ready'}
                            type="button"
                        >
                            <MdCheckCircle className="icon" />
                            Pronto para retirada
                        </RadioButton>

                        <RadioButton 
                            onClick={() => setPreparationTime('notReady')}
                            isActive={preparationTime === 'notReady'}
                            type="button"
                        >
                            <div className="setPreparationTime">
                                <div onClick={decrementTime}>
                                    <MdRemove />
                                </div>

                                {`${timeCounter} min`}

                                <div onClick={incrementTime}>
                                    <MdAdd />
                                </div>
                            </div>
                        </RadioButton>
                    </div>
                </ContainerRadioButton>

                <hr />

                <DeliverymanContainer>
                    <div>
                        <MdShuffle className="iconDeliveryman" />                
                        <p>Deixar o sistema escolher o entregador.</p>
                    </div>

                    <SetButton type="button" onClick={() => setIsDeliverymenModalOpen(true)}>
                        <MdManageAccounts />
                        Alterar
                    </SetButton>
                </DeliverymanContainer>

                <hr />

                <Summary>
                    <div>
                        <span>Saldo atual</span>
                        <strong>
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(currentBalance)}
                        </strong>
                    </div>

                    <div>
                        <span>Distância</span>
                        <strong>{'2.4'} Km</strong>
                    </div>

                    <div>
                        <span>Para o entregador</span>
                        <strong>
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(currentBalance)}
                        </strong>
                    </div>

                    <div>
                        <span>Saldo a ser descontado</span>
                        <strong>
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(currentBalance)}
                        </strong>
                    </div>

                    <div>
                        <span>Total</span>
                        <h2>
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(currentBalance)}
                        </h2>
                    </div>
                </Summary>

                <hr />

                <SubmitButton type="submit">
                    Solicitar entregador
                    <MdDoubleArrow className="icon" />
                </SubmitButton>
            </Container>

            <Modal
                isOpen={isCollectAddressesModalOpen}
                onRequestClose={handleCloseCollectAddressesModal}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
                <HeaderDetails>
                    {isNewCollectAddressVisible ? (
                        <>
                            <HeaderButton onClick={handleNewModalItem}>
                                <MdArrowBack />
                            </HeaderButton>
                            <h3>
                                Novo endereço de retirada
                            </h3>
                        </>
                    ) : (
                        <h3>
                            Meus endereços de retirada
                        </h3>
                    )}
                    <HeaderButton onClick={handleCloseCollectAddressesModal}>
                        <MdClose />
                    </HeaderButton>
                </HeaderDetails>

                <hr /> 

                {isNewCollectAddressVisible ? (
                    <>
                        <NewModalItemForm>
                            <InputForm>
                                <Label>
                                    <MdNotes />
                                    Apelido
                                </Label>
                                <input type="text" placeholder="Digite um nome de fácil memorização" />
                            </InputForm>

                            <InputForm>
                                <Label>
                                    <MdOutlineFmdGood />
                                    Rua de retirada
                                </Label>
                                <input type="text" placeholder="Rua onde o entregador deverá retirar o pedido" required />
                            </InputForm>

                            <ContainerNumberAndComplement>
                                <InputForm>
                                    <Label>
                                        <MdOutlineFmdGood />
                                        Número de retirada
                                    </Label>
                                    <input type="number" placeholder="123" required />
                                </InputForm>

                                <InputForm>
                                    <Label>
                                        <MdOutlineFmdGood />
                                        Complemento (opcional)
                                    </Label>
                                    <input type="text" placeholder="Ap 12, Casa 5, Fundos" />
                                </InputForm>
                            </ContainerNumberAndComplement>
                        </NewModalItemForm>

                        <hr />

                        <SubmitButton>
                            Adicionar novo endereço
                        </SubmitButton>
                    </>
                ) : (
                    <>
                        <ModalContainer>
                            <ModalItem>
                                <CollectAddress />

                                <ModalItemActions>
                                    <MdCheckCircle className="iconCheck" />
                                    <DisfavorButton>
                                        <MdDelete />
                                    </DisfavorButton>
                                </ModalItemActions>
                            </ModalItem>
                        </ModalContainer>
                        
                        <hr />

                        <NewModalItemButton onClick={() => setIsNewCollectAddressVisible(true)}>
                            <MdAdd />
                            Adicionar novo endereço de retirada
                        </NewModalItemButton>
                    </>
                )}
            </Modal>
            
            <Modal
                isOpen={isDeliverymenModalOpen}
                onRequestClose={handleCloseDeliverymenModal}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
                <HeaderDetails>
                    {isNewDeliverymanVisible ? (
                        <>
                            <HeaderButton onClick={handleNewModalItem}>
                                <MdArrowBack />
                            </HeaderButton>
                            
                            <h3>
                                Novo entregador favorito
                            </h3>
                        </>
                    ) : (
                        <h3>
                            Meus entregadores favoritos
                        </h3>
                    )}
                    <HeaderButton onClick={handleCloseDeliverymenModal}>
                        <MdClose />
                    </HeaderButton>
                </HeaderDetails>

                <hr />

                {isNewDeliverymanVisible ? (
                    <>
                        <NewModalItemForm>
                            <InputForm>
                                <Label>
                                    <MdVpnKey />
                                    Código do entregador
                                </Label>
                                <input type="text" placeholder="Digite um o código que o entregador te passar" />
                            </InputForm>
                        </NewModalItemForm>

                        <hr />

                        <SubmitButton>
                            Adicionar novo entregador
                        </SubmitButton>
                    </>
                ) : (
                    <>
                        <ModalItem>
                            <ChooseBySystem>
                                <MdShuffle className="iconRandom" />                
                                <p>Deixar o sistema escolher o entregador.</p>
                            </ChooseBySystem>
                            <MdCheckCircle className="iconCheck" />
                        </ModalItem>

                        <ModalContainer>
                            <ModalItem>
                                <Deliveryman 
                                    deliverymanName="Mauro Vinicius"
                                    deliverymanRatingAverage="4.9"
                                />

                                <ModalItemActions>
                                    <MdCheckCircle className="iconCheck" />

                                    <DisfavorButton>
                                        <FaHeartBroken />
                                    </DisfavorButton>
                                </ModalItemActions>
                            </ModalItem>
                        </ModalContainer>

                        <hr />

                        <NewModalItemButton onClick={() => setIsNewDeliverymanVisible(true)}>
                            <MdAdd />
                            Adicionar pelo código
                        </NewModalItemButton>
                    </>
                )}
            </Modal>
        </>
    )
}