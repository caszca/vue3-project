import { defineStore } from "pinia";
import { getHotSuggestsCities, getCategories, getHouseList } from '@/service/module/home'
const useHomestore = defineStore('home', {
    state: () => ({
        hotSuggestsCities: [],
        categoriesData: [],
        homeList: [],
        currentPage: 1
    }),

    actions: {
        async fitchHotSuggestsCities() {
            const { data: { data } } = await getHotSuggestsCities()
            this.hotSuggestsCities = data

        },

        async fitchCategoried() {
            const { data: { data } } = await getCategories()
            this.categoriesData = data
        },


        async fitchHouseList() {
            const { data: { data } } = await getHouseList(this.currentPage)
            this.homeList.push(...data)//新数据，要与旧数据同时存在,注意此时扩展运算符
            this.currentPage += 1
            console.log(1)
        }
    }
})

export default useHomestore