import styled from "styled-components";
import { Row } from "../../style/style";

export const NavbarComponent = styled(Row)`
    padding: 10px 20px;

    justify-content: space-between;
    align-items: center;
`

export const LeftContent = styled(Row)`
    h1 {
        color: white;
        margin: 0;
    }
`

export const SwitchContainer = styled(Row)`
    font-size: 20px;
    column-gap: 20px;

    width: 30vw;
    justify-content: center;

    .current {
        padding-bottom: 5px;
        border-bottom: 1px #1890ff solid;
        color: #1890ff;
    }

    a {
        color: white;
        &:hover {
            color: #1890ff;
        }
    }
`

export const RightContent = styled(Row)`
    h2 {
        color: white;
    }
`