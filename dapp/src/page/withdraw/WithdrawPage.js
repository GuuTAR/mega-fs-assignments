import { useContext, useEffect, useState } from "react"
import Navbar from "../../component/navbar/Navbar"
import { ReloadOutlined, LoadingOutlined } from "@ant-design/icons"
import { MetaMaskContext } from "../../context/metamask"
import { getCash, getMySupply } from "../../service/contract.service"
import { getSupplyAPY } from "../../service/ether.service"
import { H3 } from "../../style/style"
import { ApplicationPage, Info, InfoContainer } from "./Style"
import Withdraw from "../../component/withdraw/Withdraw"
import { getMyToken } from "../../service/contract.service"
import Loading from "../../component/loading/Loading"

const WithdrawPage = () => {
    const { account_addr } = useContext(MetaMaskContext)
    const [loading, setLoading] = useState(true)
    const [reload, setReload] = useState(false)
    const [balance, setBalance] = useState(0)
    const [supply, setSupply] = useState(0)
    const [totalSupply, setTotalSupply] = useState(0)
    const [supplyAPY, setSupplyAPY] = useState(0)

    useEffect(() => {
        if (account_addr) {
            fetchData()
        }
        // eslint-disable-next-line
    }, [account_addr, setLoading])

    const fetchData = async () => {
        const _token = await getMyToken(account_addr)
        const _totalSupply = await getCash(account_addr)
        const _mySupply = await getMySupply(account_addr)
        const _supplyAPY = await getSupplyAPY()
        if (_token) {
            setBalance(_token)
        }
        if (_totalSupply) {
            setTotalSupply(_totalSupply)
        }
        if (_mySupply) {
            setSupply(_mySupply)
        }
        if (_supplyAPY) {
            setSupplyAPY(_supplyAPY)
        }
        setLoading(false)
        setReload(false)
    }

    const handleReload = () => {
        setReload(true)
        fetchData()
    }

    if (loading) return <Loading />
    return (
        <>
            <Navbar page="withdraw" />
            <ApplicationPage>
                <InfoContainer>
                    <Info>
                        <H3>Your Supplied</H3>
                        {supply.toFixed(4)} ETH
                    </Info>
                    <Info>
                        <H3>Total Supplied</H3>
                        {totalSupply.toFixed(4)} ETH
                    </Info>
                    <Info>
                        <H3>APY</H3>
                        {supplyAPY.toFixed(2)}%
                    </Info>
                    {reload? 
                        <LoadingOutlined />:
                        <ReloadOutlined onClick={handleReload} />}
                </InfoContainer>
                <Withdraw
                    setLoading={setLoading} 
                    token={balance} 
                    account_addr={account_addr} 
                    reload={fetchData}
                    isSupply={false}
                />
            </ApplicationPage>
        </>
    )
}

export default WithdrawPage