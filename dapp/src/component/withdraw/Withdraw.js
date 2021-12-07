import { Button, Input, Select } from "antd"
import { useState } from "react"
import { redeem } from "../../service/contract.service"
import { Error, Success } from "../../util/notification"
import { Balance, ErrorText, InputContainer, SuppleContainer, SupplyTitle } from "./Style"

const Withdraw = ({ token, account_addr, isSupply = true, reload }) => {

    const [value, setValue] = useState()
    const [inputError, setInputError] = useState(false)

    const handleWithDraw = async () => {
        if (!inputError) {
            const _ether = await redeem(value, account_addr)
            if (_ether) {
                Success("Withdraw asset successfully!", `You get ${_ether} ether from transaction.`)
                reload()
            }
            else {
                Error("Withdraw asset unsuccessfully!", "Something wrong...")
            }
        }
            
    }

    const handleChangeInputValue = (e) => {
        const value = parseFloat(e.target.value)
        if (value === 0 || value) {
            setInputError(false)
            setValue(e.target.value)
        }
        else {
            setInputError(true)
            setValue(e.target.value)
        }
    }

    const handleMax = () => {
        setValue(token.toFixed(4))
        setInputError(false)
    }

    return (
        <SuppleContainer>
            <SupplyTitle>{isSupply ? "Supply" : "WithDraw"}</SupplyTitle>
            {account_addr && <Balance>Token: {token.toFixed(4)} cETH</Balance>}
            <InputContainer>
                <Select defaultValue="ceth">
                    <Select.Option value="ceth">cETH</Select.Option>
                </Select>
                <Input 
                    placeholder="Insert cETH" 
                    value={value} 
                    onChange={handleChangeInputValue} 
                    prefix={<label onClick={handleMax}>MAX</label>} 
                />
            </InputContainer>
            {inputError && <ErrorText>Value must be number</ErrorText>}
            <Button onClick={handleWithDraw}>Withdraw</Button>
        </SuppleContainer>
    )
}

export default Withdraw