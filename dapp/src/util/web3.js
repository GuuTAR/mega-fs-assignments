import Web3 from 'web3'
import { contractABI } from './contract'

const web3 = new Web3(window.ethereum)

export const web3Init = async () => {
    const provider = window.ethereum
    if (provider) {
        // Metamask is installed
        console.log("Metamask is installed!")
        const accounts = await provider
            .request({ method: 'eth_requestAccounts' })
            .catch(err => console.error(err))
        if (accounts) {
            return accounts[0]
        }
    }
    else {
        console.log("Install MetMask First!")
    }
}

export const getBalance = (address) => web3.eth.getBalance(address)

const contractAddress = "0xd6801a1DfFCd0a410336Ef88DeF4320D6DF1883e"

export const Contract = new web3.eth.Contract(contractABI, contractAddress)