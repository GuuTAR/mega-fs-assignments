import { Button } from "antd"
import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import { MetaMaskContext } from "../../context/metamask"
import { H1 } from "../../style/style"
import { web3Init } from "../../util/web3"
import { LoginPage } from "./Style"

const Login = () => {
    const navigate = useNavigate()
    const { initAccount } = useContext(MetaMaskContext)

    const [error, setError] = useState(false)

    const handleLogin = async () => {
        
        const account = await web3Init()
        if (account) {
            initAccount(account)
            navigate("/supply")
        }
        else setError(true)
    }

    return (
        <LoginPage>
            <H1>Simple Compound</H1>
            <Button onClick={handleLogin}>Login with wallet</Button>
            {error && <label>Some error happen during logging...</label>}
        </LoginPage>
    )
}

export default Login