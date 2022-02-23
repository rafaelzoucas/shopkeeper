import { useState } from "react"

import { Toggle } from '../Toggle'

import { DeliverymanProfileProps } from '../../contexts/DeliverymanProvider/types'

import {
    MdContentCopy,
    MdDeliveryDining,
    MdFavorite, 
    MdFavoriteBorder,
    MdTaskAlt, 
    MdTimer
} from "react-icons/md"

import { 
    DataContainer, 
    Content, 
    Data, 
    Favorite, 
    Rate, 
    Summary, 
    UserImg, 
    SummaryItem,
    Settings,
    SettingsItem,
    PIXKey,
    WhatsApp
} from "./styles"

import ProfilePic from '../../assets/deliveryman.png'
import { FaStar, FaWhatsapp } from "react-icons/fa"

export function DeliverymanProfile(props: DeliverymanProfileProps) {
    const [isFavorite, setIsFavorite] = useState(false)

    function handleFavorite() {
        isFavorite 
        ? setIsFavorite(false) 
        : setIsFavorite(true)
    }

    return(
        <>
            <DataContainer>
                <Content>
                    <UserImg>
                        <img src={ProfilePic} alt="Foto de perfil" />
                    </UserImg>

                    <Data>
                        <h2>{props.deliverymanName}</h2>
                        
                        <Rate>
                            <FaStar />
                            <strong>{props.deliverymanRatingAverage}</strong>
                        </Rate>

                        <Favorite onClick={handleFavorite}>
                            {isFavorite 
                                ? <MdFavorite /> 
                                : <MdFavoriteBorder />
                            }
                            Favorito
                        </Favorite>
                        <WhatsApp>
                            <FaWhatsapp className='icon'/>
                            Whatsapp 
                        </WhatsApp>

                        <PIXKey>
                            <MdContentCopy className='icon'/>
                            Copiar Chave PIX
                        </PIXKey>
                    </Data>
                </Content>
            </DataContainer>
            
            <Summary>
                <SummaryItem>
                    <header>
                        <h1>597</h1>
                        <MdDeliveryDining className='summaryIcon' />
                    </header>

                    <span>entregas realizadas</span>
                </SummaryItem>

                <SummaryItem>
                    <header>
                        <h1>25 min</h1>
                        <MdTimer className='summaryIcon' />
                    </header>
                    <span>por entrega</span>
                </SummaryItem>

                <SummaryItem>
                    <header>
                        <h1>97%</h1>
                        <MdTaskAlt className='summaryIcon' />
                    </header>
                    <span>taxa de finalização</span>
                </SummaryItem>
            </Summary>

            <Settings>
                <SettingsItem>
                    <p>Evitar este entregador na fila</p>
                    <Toggle />
                </SettingsItem>
            </Settings>
        </>
    )
}