<script setup>
import useHouseDetailStore from "@/stores/module/houseDetail";
import { useRoute, useRouter } from "vue-router";
import houseSwiper from "./cpns/houseSwiper.vue";
import loading from "@/components/loading/loading.vue";
import HouseDescribe from "./cpns/houseDescribe.vue";
import HouseFacilitySlot from "./cpns/houseFacilitySlot.vue";

const route = useRoute();
const router = useRouter();
const houseDetailStore = useHouseDetailStore();

houseDetailStore.fitchHouseDetail(route.params.id);

const back = () => {
  router.back();
};
</script>

<template>
  <div class="houseDetail hideBottomNav">
    <loading />
    <van-nav-bar
      title="房屋详情"
      left-text="途家"
      left-arrow
      @click-left="back"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

    <houseSwiper />
    <HouseDescribe />
    <HouseFacilitySlot />
  </div>
</template>

<style lang='less' scoped>
.houseDetail {
  :deep(.van-nav-bar__text) {
    font-weight: 600;
    font-size: 16px;
  }
  /* :deep(.van-icon) {
    font-size: 20px;
  } */
}
</style>