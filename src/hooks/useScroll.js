//下拉刷新房子数据hook
import { onMounted, onUnmounted, ref } from 'vue'
//实现节流，避免频繁调用回调，造成卡顿
import { throttle } from 'underscore'

const useScroll = () => {
    const ifBottom = ref(false)
    const getHouseData = throttle(() => {
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        const scrollHeight = document.documentElement.scrollHeight;

        if (scrollTop + clientHeight >= scrollHeight) {

            ifBottom.value = true
        }
    }, 100)

    onMounted(() => {
        window.addEventListener("scroll", getHouseData);
    }),

        onUnmounted(() => {
            window.removeEventListener("scroll", getHouseData);
        });
    return { ifBottom }
}

export default useScroll