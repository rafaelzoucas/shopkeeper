import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import { AuthProvider } from './contexts/AuthProvider'

import { ProtectedLayout } from './components/ProtectedLayout';

import { GlobalStyle } from './styles/global'

import { Login } from './pages/Login';

export function App() {
  return (
      <AuthProvider>
        <Router>
          <Routes>
            <Route 
              path="/home" 
              element={
                <ProtectedLayout>
                  <h1>Olá essa é a home</h1>
                </ProtectedLayout>
              } 
            />

            <Route 
              path="/login" 
              element={
                <Login />
              } 
            />
          </Routes>
        </Router>
        {/* <>
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
        <Login />
        <DeliveryDetailsModal />
        <DeliverymanProfileModal />
        
        <Snackbar 
        title="Validando login" 
        message="osidjfoaisdjfasd" 
        type="loading" 
        timeOut={null}
      /> */}
        <GlobalStyle />
      </AuthProvider>
  );
}