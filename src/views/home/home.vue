
<script>
export default {
  //keep-alive的必要条件
  name: "home",
};
</script>
<script setup>
import { watch, ref, onActivated } from "vue";
import useHomestore from "@/stores/module/home";
import { storeToRefs } from "pinia";
import navLocation from "./cpns/navLocation.vue";
import categories from "./cpns/categories.vue";
import homeContent from "./cpns/homeContent.vue";
import loading from "@/components/loading/loading.vue";
import useScroll from "@/hooks/useScroll";
import searchBar from "@/components/searchBar/searchBar.vue";

//请求house展示数据
const homeStore = useHomestore();
const houseContentRef = ref();
homeStore.fitchHouseList();
const { homeList } = storeToRefs(homeStore);

const { ifBottom, scrollTop } = useScroll(houseContentRef);

watch(ifBottom, () => {
  if (ifBottom.value) {
    homeStore.fitchHouseList();
    ifBottom.value = false; //记得判断为true时才请求，否则这里一修改就会重新执行
  }
});

//从其他页面返回恢复原页面位置,注意搭配keep-alive
onActivated(() => {
  houseContentRef.value.scrollTo({
    top: scrollTop.value,
  });
});
</script>

<template>
  <div class="home" ref="houseContentRef">
    <searchBar v-show="scrollTop >= 360" />
    <div class="nav-bar">
      <span class="title">途家民宿</span>
    </div>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <navLocation />
    <categories />
    <homeContent />
    <loading />
  </div>
</template>

<style lang='less' scoped>
.home {
  height: 100vh;
  overflow-y: auto; //让home作为一个盒子滚动，而不是window滚动
  .nav-bar {
    display: flex;
    height: 46px;
    justify-content: center;
    align-items: center;

    .title {
      color: rgb(252, 107, 31);
      font-weight: 600;
    }
  }

  .banner {
    img {
      width: 100%;
    }
  }
}
</style>