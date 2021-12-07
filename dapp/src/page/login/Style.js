import styled from "styled-components";
import { Col } from "../../style/style";

export const LoginPage = styled(Col)`
    width: 100vw;
    height: 100vh;

    justify-content: center;
    align-items: center;

    h1 {
        color: white;
    }

    .ant-btn {
        width: 200px;
        height: max-content;

        align-self: center;

        color: white;
        background-color: #1890ff;

        border-radius: 20px;
        border: 2px transparent solid;

        font-size: 20px;
        font-weight: bold;

        &:hover {
            border: 2px #1890ff solid;
            background-color: transparent;
            color: #1890ff;
        }
    }
`