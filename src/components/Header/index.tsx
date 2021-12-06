import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

import { 
    Container, 
    Content, 
    Menu, 
    Account,
    Title,
    MoreMenu,
} from './styles'

import { 
    MdArrowBack, 
    MdFavorite, 
    MdHelp,
    MdLogout,
    MdMoreVert,
    MdPerson,
    MdSettings
} from 'react-icons/md'

import logoImg from '../../assets/logo-orange.png'
import accountImg from '../../assets/asdfasdfasf.png'
import { AddBalanceButton } from '../AddBalanceButton'

export function Header() {
    const navigate = useNavigate()
    const currentLocation = useLocation()
    const [isMenuPopOverOpen, setIsMenuPopOverOpen] = useState(false)

    function handleMenuPopOver() {
        isMenuPopOverOpen === true
        ? setIsMenuPopOverOpen(false)
        : setIsMenuPopOverOpen(true)
    }

    return(
        <>
        <Container>
            <Content>
                <img src={logoImg} alt="Helix" onClick={() => navigate('/')}/>

                <Title>
                    {currentLocation.pathname !== '/' ? (
                        <button onClick={() => navigate(-1)}>
                            <MdArrowBack />
                        </button>
                    ) : (
                        null
                    )}

                    <h3>{'props.title'}</h3>
                </Title>

                <Menu>
                    <ul>
                        <Link to={('/')}>
                            <li>
                                Entregas
                            </li>
                        </Link>

                        <Link to={('/finance')}>
                            <li>
                                Pagamentos
                            </li>
                        </Link>
                    </ul>
                </Menu>

                <Account>
                    <Link to="finance" className="balance">
                        <p>
                            Saldo atual
                        </p>
                        <p>
                            <strong>R$ 130,00</strong>
                        </p>
                    </Link>
                    
                    <img 
                        src={accountImg} 
                        alt="Seu logo"
                        onClick={handleMenuPopOver} 
                    />

                    <MdMoreVert 
                        className="menu" 
                        onClick={handleMenuPopOver} 
                    />
                </Account>

                {isMenuPopOverOpen ? (
                    <MoreMenu>
                        <Link to="/account">
                            <p>
                                <MdPerson className="icon" />
                                Minha conta
                            </p>
                        </Link>
                        <a href="#">
                            <p>
                                <MdFavorite className="icon" />
                                Entregadores Favoritos
                            </p>
                        </a>
                        <a 
                            href="https://api.whatsapp.com/send?phone=5518996465807&fbclid=IwAR1aNtRPkUTX9Xl89Wv8dmkpSdqWpkiG7FgJeXu02rnCOWlW6wCVXWbteUo" 
                            target="blank"
                        >
                            <p>
                                <MdHelp className="icon" />
                                Ajuda
                            </p>
                        </a>
                        <a href="#">
                            <p>
                                <MdSettings className="icon" />
                                Configurações
                            </p>
                        </a>
                        <a href="#">
                            <p>
                                <MdLogout className="icon" />
                                Sair
                            </p>
                        </a>
                        <AddBalanceButton />
                    </MoreMenu>
                ) : null}
            </Content>
        </Container>
        
        </>
    )
}