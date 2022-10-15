//下拉刷新房子数据hook
import { onMounted, onUnmounted, ref } from 'vue'
//实现节流，避免频繁调用回调，造成卡顿
import { throttle } from 'underscore'
//不能用window监视滑动，因为其他页面也会引起监听事件，所以要用页面的独有div
const useScroll = (elRef) => {
    let el = window
    const ifBottom = ref(false)
    const scrollTop = ref(0)
    const clientHeight = ref()
    const scrollHeight = ref()
    const getHouseData = throttle(() => {
        if (el === window) {
            scrollTop.value = document.documentElement.scrollTop;
            clientHeight.value = document.documentElement.clientHeight;
            scrollHeight.value = document.documentElement.scrollHeight;
        }
        else {
            scrollTop.value = el.scrollTop;
            clientHeight.value = el.clientHeight;
            scrollHeight.value = el.scrollHeight;
        }


        if (scrollTop.value + clientHeight.value >= scrollHeight.value) {

            ifBottom.value = true
        }
    }, 100)
    //挂载时，可以渠道绑定的ref属性
    onMounted(() => {
        if (elRef.value) el = elRef.value

        el.addEventListener("scroll", getHouseData);
    }),

        onUnmounted(() => {
            el.removeEventListener("scroll", getHouseData);
        });
    return { ifBottom, scrollTop }
}

export default useScroll