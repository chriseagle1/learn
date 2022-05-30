//导入请求函数

import {$get, $post} from '../utils/request.js'
import md5 from 'js-md5';

export let Login = async (params) => {
    params.password = md5(params.password).split('').reverse().join('')

    let data = await $post('/hotel/login', params)
    console.log(data);
}