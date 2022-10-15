import { getHouseDetail } from "@/service/module/houseDetail";
import { defineStore } from "pinia";


const useHouseDetailStore = defineStore('houseDetail', {//记得加第一个参数，store的唯一标识
    state: () => ({
        houseDetailData: {},
    }),
    actions: {
        async fitchHouseDetail(id) {
            const { data: { data } } = await getHouseDetail(id)
            //注意有些houseId获取到的房屋详情为undefined，可能是因为更新不及时
            this.houseDetailData = data
        }
    }
})

export default useHouseDetailStore