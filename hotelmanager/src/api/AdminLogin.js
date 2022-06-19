//导入请求函数

import {$get, $post, $setToken} from '../utils/request.js'
import md5 from 'js-md5';
import { $msg_e, $msg_s } from '@/utils/msg.js';

export let Login = async (params) => {
    params.password = md5(params.password).split('').reverse().join('')

    let {code, message, result} = await $post('/hotel/login', params)
    if(code == 1) {
        $msg_s('登陆成功');
        sessionStorage.setItem('token', result.token);
        $setToken();
        let roleList = await $post('/hotel/role-list')
    } else {
        console.log(message, result);
        $msg_e('登陆失败');
    }
    
    return code == 1 ? true : false
}