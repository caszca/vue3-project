import axios from 'axios'
import useMainStore from "@/stores/module/main";
import { storeToRefs } from "pinia";

const mainStore = useMainStore();
const { isLoading } = storeToRefs(mainStore);
const BASE_URL = "http://123.207.32.32:1888/api"
const TIME_OUT = 10000
const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT
})

//拦截器对loading组件进行显示判断
instance.interceptors.request.use(
    (config) => {
        isLoading.value = true
        return config
    },
    (err) => {
        return err
    }
)

instance.interceptors.response.use(
    (response) => {
        isLoading.value = false
        return response
    },
    (err) => {
        isLoading.value = false
        return err
    }
)
export { instance as axios }