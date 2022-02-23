import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import { AuthProvider } from './contexts/AuthProvider'
import { FinanceProvider } from './contexts/FinanceProvider'
import { DeliveriesProvider } from './contexts/DeliveriesProvider'

import { MainRoutes } from './routes';

import { Header } from './components/Header';
import { NewDeliveryButton } from './components/NewDeliveryButton';
import { NewDeliveryForm } from './components/NewDeliveryForm';
// import { Snackbar } from './components/Snackbar';
import { DeliveryDetailsModal } from './components/Modals/DeliveryDetailsModal';
import { DeliverymanProfileModal } from './components/Modals/DeliverymanProfileModal';
import { ProtectedLayout } from './components/ProtectedLayout';

import { Container, Main } from './styles';
import { GlobalStyle } from './styles/global'

import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ForgotPassword } from './pages/Login/ForgotPassword';
import { NewPassword } from './pages/Login/NewPassword';

export function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route 
              path="*" 
              element={
                <FinanceProvider>
                  <ProtectedLayout>
                    <>
                      <Header />
                      <Container>
                          <NewDeliveryButton />
                          <aside>
                              <NewDeliveryForm />
                          </aside>
            
                          <Main>
                              <DeliveriesProvider>
                                <MainRoutes />
                              </DeliveriesProvider>
                          </Main>
                      </Container>
                    </>
                  </ProtectedLayout>
                </FinanceProvider>
              } 
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/new-password" element={<NewPassword />} />
          </Routes>
        </AuthProvider>
      </Router>
      <DeliveryDetailsModal />
      <DeliverymanProfileModal />
        {/* <Snackbar 
        title="Validando login" 
        message="osidjfoaisdjfasd" 
        type="loading" 
        timeOut={null}
      /> */}
      <GlobalStyle />
      </>
  );
}