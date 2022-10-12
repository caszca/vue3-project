//home页面网络请求

import { axios } from '../request'

export const getHotSuggestsCities = () => {
    return axios({
        url: '/home/hotSuggests',
        method: 'GET'
    })
}
export const getCategories = () => {
    return axios({
        url: '/home/categories',
        method: 'GET'
    })
}

export const getHouseList = (currentPage) => {
    return axios({
        url: '/home/houselist',
        params: {
            page: currentPage
        }
    })
}