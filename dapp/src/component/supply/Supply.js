import { Button, Input, Select } from "antd"
import { useEffect, useState } from "react"
import { getExchangeRateCurrent, mint } from "../../service/contract.service"
import { etherToWei } from "../../service/ether.service"
import { Error, Success } from "../../util/notification"
import { Balance, ErrorText, InputContainer, ReceivingText, SuppleContainer, SupplyTitle } from "./Style"

const Supply = ({ balance, account_addr, isSupply = true, reload }) => {

    const [value, setValue] = useState()
    const [unit, setUnit] = useState("ether")
    const [inputError, setInputError] = useState(false)
    const [exchangeRate, setExchangeRate] = useState(1)

    useEffect(() => {
        fetchExchangeRate()
    }, [])

    const fetchExchangeRate = async () => {
        const _exchangeRate = await getExchangeRateCurrent()
        if (_exchangeRate) {
            setExchangeRate(_exchangeRate)
        }
    }

    const handleSupply = async () => {
        if (!inputError) {
            console.log("supply", value, unit)
            const result = await mint(value, account_addr)
            if (result) {
                const token = result
                Success("Supply asset successfully!", `You get ${token} cETH from transaction.`)
                reload()
                console.log(token)
            }
            else {
                Error("Supply asset unsuccessfully!", "Something wrong...")
            }
        }
    }

    const handleChangeInputValue = (e) => {
        const value = parseFloat(e.target.value)
        if (value === 0 || value) {
            setInputError(false)
            fetchExchangeRate()
            setValue(e.target.value)
        }
        else {
            setInputError(true)
            setValue(e.target.value)
        }
    }

    const handleMax = () => {
        setValue(balance.toFixed(4))
        setInputError(false)
    }

    const renderApproCeth = (etherToWei(value)/exchangeRate/1e8).toFixed(5)

    return (
        <SuppleContainer>
            <SupplyTitle>{isSupply ? "Supply" : "WithDraw"}</SupplyTitle>
            {account_addr && <Balance>Balance: {balance.toFixed(4)} ETH</Balance>}
            <InputContainer>
                <Select defaultValue="ether" onChange={value => setUnit(value)}>
                    <Select.Option value="ether">ether</Select.Option>
                </Select>
                <Input 
                    placeholder="Insert ether" 
                    value={value} 
                    onChange={handleChangeInputValue} 
                    prefix={<label onClick={handleMax}>MAX</label>} 
                />
            </InputContainer>
            {inputError && <ErrorText>Value must be number</ErrorText>}
            {value && <ReceivingText>
                <label>Receiving (approximately)</label>
                <label>{renderApproCeth} cETH</label>
            </ReceivingText>}
            <Button onClick={handleSupply}>Supply</Button>
        </SuppleContainer>
    )
}

export default Supply