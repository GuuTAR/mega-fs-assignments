import styled from "styled-components";
import { Col, Row } from "../../style/style";

export const ApplicationPage = styled(Col)`
    width: 98vw;
    height: 100vh;

    margin-top: 15vh;
    align-items: center;
`

export const InfoContainer = styled(Row)`
    width: 35%;
    justify-content: space-between;

    margin-bottom: 30px;

    .anticon-reload, .anticon-loading {
        font-size: 25px;
        align-self: center;
        cursor: pointer;

        color: white;
    }
`

export const Info = styled(Col)`
    width: 200px;

    padding: 5px;
    color: white;
    text-align: center;
    font-size: 25px;

    h3 {
        color: #1890ff;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
    }
`