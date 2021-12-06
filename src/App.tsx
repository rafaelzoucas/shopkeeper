import { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'

import { MainRoutes } from './routes'

import { Header } from './components/Header'
import { NewDeliveryForm } from './components/NewDeliveryForm';
import { NewDeliveryButton } from './components/NewDeliveryButton';
import { DeliveryDetailsModal } from './components/Modals/DeliveryDetailsModal'
import { DeliverymanProfileModal } from './components/Modals/DeliverymanProfileModal'

import { GlobalStyle } from './styles/global'
import { 
    Container, 
    Main 
} from './styles'
import { Login } from './pages/Login';

export function App() {
  const [isUserLogged, setIsUserLogged] = useState(false)

  return (
    <Router>
      {isUserLogged ? (
        <>
          <button onClick={() => setIsUserLogged(false)}>
            logout
          </button>
          <Header />
          <Container>
              <NewDeliveryButton />
              <aside>
                  <NewDeliveryForm />
              </aside>

              <Main>
                  <MainRoutes />
              </Main>
          </Container>
        </>
      ) : (
        <>
          <button onClick={() => setIsUserLogged(true)}>
            login
          </button>
          <Login />
        </>
      )}
        <DeliveryDetailsModal />
        <DeliverymanProfileModal />
        <GlobalStyle />
    </Router>
  );
}