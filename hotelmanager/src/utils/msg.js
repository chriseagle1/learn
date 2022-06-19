
import {ElMessage} from 'element-plus'

export let $msg_s = (message, duration = 2000) => {
    ElMessage({
        message,
        duration,
        type: 'success',
    })
}

export let $msg_w = (message, duration = 2000) => {
    ElMessage({
        message,
        duration,
        type: 'warning',
    })
}

export let $msg_e = (message, duration = 2000) => {
    ElMessage({
        message,
        duration,
        type: 'error',
    })
}