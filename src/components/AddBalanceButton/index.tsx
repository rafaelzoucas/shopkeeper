import { 
    MdAdd, 
} from "react-icons/md"

import { AddBalance } from './styles'

export function AddBalanceButton() {
    return(
        <AddBalance>
            <MdAdd />
            Adicionar saldo
        </AddBalance>
    )
}