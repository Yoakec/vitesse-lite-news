/*
 * @Author: Yoakec 1602491057@qq.com
 * @Date: 2022-05-30 22:39:43
 * @LastEditors: Yoakec 1602491057@qq.com
 * @LastEditTime: 2022-05-30 23:27:36
 * @FilePath: \news-front\src\utils\http.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'; 
import qs from 'qs';


import {BASE_URL} from '@/config/apiConfig';
import {ContentType} from '@/config/httpConfig';

const instance = axios.create({
    headers:{
        'Content-Type': ContentType.URL_ENCODED,
    },
    baseURL: BASE_URL,
})

instance.interceptors.request.use((res)=>{
    return res.data;
})

export function axiosGet<T = any>(url:string, params?:any):Promise<T>{
    return instance.get(url, {params})
}

export function axiosPost<T = any>(url:string, data?:any):Promise<T>{
    return instance.post(url, qs.stringify(data))
}