import { H1, H2 } from "../../style/style"
import { LeftContent, NavbarComponent, RightContent, SwitchContainer } from "./Style"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { MetaMaskContext } from "../../context/metamask"

const Navbar = ({page = "supply"}) => {
    const { account_addr } = useContext(MetaMaskContext)

    return (
        <NavbarComponent>
            <LeftContent>
                <H1>Simple Compound</H1>
            </LeftContent>
            {page === "supply"?
                <SwitchContainer>
                    <Link className="current" to="/supply">Supply</Link>
                    <Link to="/withdraw">Withdraw</Link>
                </SwitchContainer> :
                <SwitchContainer>
                    <Link to="/supply">Supply</Link>
                    <Link className="current" to="/withdraw">Withdraw</Link>
                </SwitchContainer>
            }
            
            <RightContent>
                <H2>
                    Your Account : {account_addr.slice(0, 6)}
                    ...
                    {account_addr.slice(account_addr.length-4, account_addr.length)}
                </H2>
            </RightContent>

        </NavbarComponent>
    )
}

export default Navbar