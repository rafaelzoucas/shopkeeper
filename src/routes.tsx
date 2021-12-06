import {
    Routes,
    Route
} from 'react-router-dom'

import { Finance } from './pages/Finance'
import { Deliveries } from './pages/Deliveries';
import { MyAccount } from './pages/MyAccount';

export function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Deliveries />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/account" element={<MyAccount />} />
        </Routes>
    )
}