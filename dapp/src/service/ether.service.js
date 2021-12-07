import { getSupplyRatePerBlock, getTotalSupply } from "./contract.service"

export const weiToEther = (wei) => Number.parseFloat(wei/1000000000000000000)
export const etherToWei = (wei) => Number.parseFloat(1000000000000000000 * wei)
export const weiToGwei = (wei) => Number.parseFloat(wei/1000000000)

export const mintToToken = (mint) => Number.parseFloat(mint/1e8)
export const tokenToMint = (token) => Number.parseInt(token*1e8)

// 15 second per block
const secPerYear = 31556926
const blockSecond = 15
const blockPerYear = (1 / blockSecond) * secPerYear

export const getSupplyAPY = async () => {
    const suppleRatePerBlock = await getSupplyRatePerBlock()
    const totalSuppliedAmount = await getTotalSupply()
    if (suppleRatePerBlock) {
        return suppleRatePerBlock * blockPerYear / totalSuppliedAmount
    }
}