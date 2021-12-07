import { notification } from 'antd'

export const Inform = (message, desc) => 
    notification.open({
        message: message,
        description: desc,
        duration: 0
    })

export const Success = (message, desc) => 
    notification.success({
        message: message,
        description: desc,
        duration: 0
    })

export const Error = (message, desc) => 
    notification.error({
        message: message,
        description: desc,
        duration: 0
    })