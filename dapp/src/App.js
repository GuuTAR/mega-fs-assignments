import "./App.css"
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router"
import Login from "./page/login/Login";
import Application from "./page/supply/SupplyPage";
import { useContext, useEffect, useState } from "react";
import { web3Init } from "./util/web3";
import { MetaMaskContext } from "./context/metamask";
import WithdrawPage from "./page/withdraw/WithdrawPage";

const App = () => {
    const navigate = useNavigate()
    const { initAccount } = useContext(MetaMaskContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const handleLogin = async () => {
            const account = await web3Init()
            if (account) initAccount(account)
            else navigate("/login")
            setLoading(false)
        }
        handleLogin()
        // eslint-disable-next-line
    }, [])

    if (loading) return <div />
    return (
        <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<Login />} />
            <Route exact path="/supply" element={<Application action="supply" />} />
            <Route exact path="/withdraw" element={<WithdrawPage />} />
        </Routes>
    )
}

export default App
