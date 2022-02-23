import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

import { 
    Container, 
    Content, 
    Menu, 
    Account,
    Title,
    MoreMenu,
    MenuItem,
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

import { useAuth } from '../../contexts/AuthProvider/useAuth'
import { useFinance } from '../../contexts/FinanceProvider/useFinance'

export function Header() {
    const navigate = useNavigate()
    const auth = useAuth()
    const currentBalance = useFinance()

    const currentLocation = useLocation()
    const [isMenuPopOverOpen, setIsMenuPopOverOpen] = useState(false)

    function handleLogout() {
        auth.logout()
    }

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
                            <strong>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(currentBalance)}
                            </strong>
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
                            <MenuItem>
                                <MdPerson className="icon" />
                                Minha conta
                            </MenuItem>
                        </Link>
                        <Link to="/favorites">
                            <MenuItem>
                                <MdFavorite className="icon" />
                                Entregadores Favoritos
                            </MenuItem>
                        </Link>
                        <a 
                            href="https://api.whatsapp.com/send?phone=5518996465807&fbclid=IwAR1aNtRPkUTX9Xl89Wv8dmkpSdqWpkiG7FgJeXu02rnCOWlW6wCVXWbteUo" 
                            target="blank"
                        >
                            <MenuItem>
                                <MdHelp className="icon" />
                                Ajuda
                            </MenuItem>
                        </a>
                        <Link to="/settings">
                            <MenuItem>
                                <MdSettings className="icon" />
                                Configurações
                            </MenuItem>
                        </Link>
                        <div onClick={handleLogout}>
                            <MenuItem>
                                <MdLogout className="icon" />
                                Sair
                            </MenuItem>
                        </div>
                        <AddBalanceButton />
                    </MoreMenu>
                ) : null}
            </Content>
        </Container>
        
        </>
    )
}