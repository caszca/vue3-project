<!-- 加载gif显示 -->
<script setup>
import useMainStore from "@/stores/module/main";
import { storeToRefs } from "pinia";

const mainStore = useMainStore();
const { isLoading } = storeToRefs(mainStore);
const maskClick = () => {
  isLoading.value = false;
};
</script>

<template>
  <!-- 直接在组件里判断，直接使用 -->
  <div class="loading" v-show="isLoading" @click="maskClick">
    <div class="bgImg">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="" />
    </div>
  </div>
</template>

<style lang='less' scoped>
.loading {
  position: fixed;
  display: flex;
  z-index: 999;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2); /* 闹心，引入的图片显示出问题 */
  .bgImg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 104px;
    background: #fff;
    border-radius: 15px;

    img {
      width: 80px;
      height: 80px;
    }
  }
}
</style>