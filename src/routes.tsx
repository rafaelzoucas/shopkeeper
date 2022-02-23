import {
    Routes,
    Route
} from 'react-router-dom'

import { Deliveries } from './pages/Deliveries';
import { Favorites } from './pages/Favorites'
import { Finance } from './pages/Finance'
import { MyAccount } from './pages/MyAccount';
import { Settings } from './pages/Settings'


export function MainRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Deliveries />} />

            <Route path="/favorites" element={<Favorites />} />

            <Route path="/finance" element={<Finance />} />

            <Route path="/account" element={<MyAccount />} />

            <Route path="/settings" element={<Settings />} />
        </Routes>
    )
}