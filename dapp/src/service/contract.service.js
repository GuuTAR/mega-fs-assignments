import { Contract } from "../util/web3"
import { etherToWei, mintToToken, tokenToMint, weiToEther } from "./ether.service"

const { methods } = Contract

// const accountPayload = (account) => ({
//     from: account
// })

export const getCash = async () => {
    const response = await methods.getCash().call()
    return weiToEther(response)
}

export const getTotalSupply = async () => {
    const response = await methods.totalSupply().call()
    return response
}

export const getSupplyRatePerBlock = async () => {
    const response = await methods.supplyRatePerBlock().call()
    return response
}

export const getExchangeRateCurrent = async () => {
    const response = await methods.exchangeRateCurrent().call()
    return response / 1e18
}

export const getMySupply = async (account) => {
    const mySupply = await methods.balanceOfUnderlying(account).call()
    return weiToEther(mySupply)
}

export const getMyToken = async (account) => {
    const mintValue = await methods.balanceOf(account).call()
    return mintToToken(mintValue)
}

export const mint = async (supply, account) => {
    const response = await methods.mint().send({from: account, value: etherToWei(supply)})
    return mintToToken(response.events.Mint.returnValues.mintTokens)
}

export const redeem = async (token, account) => {
    const response = await methods.redeem(tokenToMint(token)).send({from: account})
    return weiToEther(response.events.Redeem.returnValues.redeemAmount)
}