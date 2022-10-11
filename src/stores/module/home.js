import { defineStore } from "pinia";
import { getHotSuggestsCities } from '@/service/module/home'
const useHomestore = defineStore('home', {
    state: () => ({
        hotSuggestsCities: []
    }),

    actions: {
        async fitchHotSuggestsCities() {
            const { data: { data } } = await getHotSuggestsCities()
            this.hotSuggestsCities = data

        }
    }
})

export default useHomestore