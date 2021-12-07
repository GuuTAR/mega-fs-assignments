import styled from "styled-components";
import { Col, H2, Row } from "../../style/style";

export const SuppleContainer = styled(Col)`
    width: 25%;
    height: 300px;

    border: 2px #1890ff solid;
    border-radius: 10px;

    padding: 10px;

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

        margin-top: 50px;

        &:hover {
            border: 2px #1890ff solid;
            background-color: transparent;
            color: #1890ff;
        }
    }
`

export const SupplyTitle = styled(H2)`
    align-self: center;

    margin: 20px 0px;

    color: white;
    font-size: 20px;
`

export const Balance = styled.label`
    align-self: flex-end;
    color: white;
`

export const InputContainer = styled(Row)`
    width: 100%;
    
    justify-content: space-between;
    column-gap: 10px;
    .ant-input-affix-wrapper {
        width: 75%
    }
    .ant-select {
        width: 22%;
        
        .ant-select-selector {
            width: 100%
        }
    }
`

export const ErrorText = styled.label`
    align-self: flex-end;
    color: red;
`
