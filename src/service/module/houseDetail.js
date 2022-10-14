import { axios } from '../request/index'

//获取房间的详细信息
export const getHouseDetail = (id) => {

    return axios({
        method: 'GET',
        url: `/detail/infos?houseId=${id}`
    })
}