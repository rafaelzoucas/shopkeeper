import {
    Routes,
    Route
} from 'react-router-dom'

import { Finance } from './pages/Finance'
import { Deliveries } from './pages/Deliveries';
import { MyAccount } from './pages/MyAccount';

export function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Deliveries />} />
            <Route path="/finance" element={
                <Finance currentBalance="test" items={
                    [
                        {
                            id: 1,
                            description: 'OIIII',
                            date: '07/12/21',
                            value: 'R$ 50,00'
                        }
                    ]
                }
                />} />
            <Route path="/account" element={<MyAccount />} />
        </Routes>
    )
}