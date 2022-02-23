import { useContext } from "react"
import { DeliveriesContext } from "."

export function useDeliveries() {
    const context = useContext(DeliveriesContext)
    return context
}