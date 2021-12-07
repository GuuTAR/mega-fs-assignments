import { createContext, useReducer } from "react"

const initState = {
    account_addr: ""
}

export const MetaMaskContext = createContext(initState)

const metaMaskReducer = (state, action) => {
    switch (action.type) {
        case "INIT_ACCOUNT":
            return {
                ...state,
                account_addr: action.payload
            }
        default:
            return
    }
}

export const MetaMaskContextProvider = ({ children }) => {
    const [metaMaskState, metaMaskDispatch] = useReducer(metaMaskReducer, initState)

    const { account_addr } = metaMaskState

    const initAccount = payload => metaMaskDispatch({ type: "INIT_ACCOUNT", payload })

    return (
        <MetaMaskContext.Provider value={{ account_addr, initAccount }}>
            {children}
        </MetaMaskContext.Provider>
    )
}