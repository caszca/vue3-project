//home页面网络请求

import { axios } from '../request'

export const getHotSuggestsCities = () => {
    return axios({
        url: '/home/hotSuggests',
        method: 'GET'
    })
}