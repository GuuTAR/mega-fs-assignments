import styled from "styled-components";
import { Col } from "../../style/style";

export const LoadingPage = styled(Col)`
    width: 99vw;
    height: 100vh;

    color: white;

    justify-content: center;
    align-items: center;

    font-size: 20px;

    row-gap: 20px;

    svg {
        font-size: 40px;
    }

    h1 {
        color: inherit;
    }
`