<script setup>
import { watch } from "vue";
import useHomestore from "@/stores/module/home";
import { storeToRefs } from "pinia";
import houseV9 from "@/components/houseV9/houseV9.vue";
import houseV3 from "@/components/houseV3/houseV3.vue";
import searchBar from "@/components/searchBar/searchBar.vue";
//滑动底部hook
//一个撤销把hooks文件名改了
import useScroll from "@/hooks/useScroll";
import { useRouter } from "vue-router";
const router = useRouter();
const homeStore = useHomestore();
homeStore.fitchHouseList();
const { homeList } = storeToRefs(homeStore);

const { ifBottom, scrollTop } = useScroll();

watch(ifBottom, () => {
  homeStore.fitchHouseList();
  ifBottom.value = false;
});

//点击house跳转到详情
const houseClick = (id) => {
  router.push(`/houseDetail/${id}`);
};
</script>
 
<template>
  <div class="homeContent">
    <searchBar v-show="scrollTop >= 360" />
    <div class="prompt">热门精选</div>
    <div class="houseList">
      <template v-for="(item, index) in homeList" :key="item.data.houseId">
        <houseV3
          v-if="item.discoveryContentType === 3"
          :houseList="item.data"
          @click="houseClick(item.data?.houseId)"
        /><!-- v-if成立时，才会传入prop -->
        <houseV9
          v-else-if="item.discoveryContentType === 9"
          :houseList="item.data"
          @click="houseClick(item.data?.houseId)"
        />
      </template>
    </div>
  </div>
</template>

<style lang='less' scoped>
.homeContent {
  .prompt {
    height: 48px;
    line-height: 48px;
    font-size: 18px;
    color: #333;
    font-weight: 700;
    padding-left: 20px;
    margin-top: 12px;
  }
  .houseList {
    display: flex;
    flex-wrap: wrap;
    //padding: 0 20px;
    padding: 0 15px 0 20px;
    //flex-shrink: 0;
  }
}
</style>