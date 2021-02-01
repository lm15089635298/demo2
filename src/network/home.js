import { request } from './request';

export function getHomedata() {
    return request({
        url: '/home/multidata'
    })
};
export function getHomedata_goods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}