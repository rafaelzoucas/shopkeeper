import { useContext } from "react"
import { FinanceContext } from "."

export function useFinance() {
    const context = useContext(FinanceContext)
    return context as any
}