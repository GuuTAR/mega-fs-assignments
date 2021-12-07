import { LoadingOutlined } from "@ant-design/icons"
import { H1 } from "../../style/style"
import { LoadingPage } from "./Style"

const Loading = () => {
    return (
        <LoadingPage>
            <H1>Simple Compound</H1>
            <LoadingOutlined />
        </LoadingPage>
    )
}

export default Loading