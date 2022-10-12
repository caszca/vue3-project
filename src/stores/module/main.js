import { defineStore } from "pinia";

//全场公用数据
const useMainStore = defineStore('main', {
    state: () => ({

        startDate: {},
        endDate: {}

    }),
    actions: {

    }
})

export default useMainStore