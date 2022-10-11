import { axios } from "../request";

export const getAllCity = () => {
    return axios({
        method: 'GET',
        url: '/city/all'
    })
}