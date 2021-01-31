import axios from 'axios';
//导出
export function request(config) {
    //创建实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    });
    //拦截器
    instance.interceptors.request.use(config => {
        return config
    }, err => {

    });
    instance.interceptors.response.use(config => {
        return config.data
    }, err => {

    });
    return instance(config)
}