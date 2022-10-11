import { defineStore } from "pinia";
import { getAllCity } from '@/service/module/city'
const useCityStore = defineStore('city', {
    state: () => ({
        allCityData: {},
        currentCity: {}
    }),
    actions: {
        //网络请求
        async fetchAllCityData() {
            const { data: { data } } = await getAllCity()
            this.allCityData = data
        }
    }
})

export default useCityStore
