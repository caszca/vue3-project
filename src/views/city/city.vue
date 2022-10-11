<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/module/city";
import { storeToRefs } from "pinia";
import cityIndexItem from "./cpns/cityIndexItem.vue";
//city的store里取城市数据
const cityStore = useCityStore();
cityStore.fetchAllCityData();
const { allCityData } = storeToRefs(cityStore);

//点击取消路由跳转回首页
const router = useRouter();
const serachCity = ref();
const cancelSearch = () => {
  router.push("/home");
};

//active赋值
const active = ref();

//取得不同tab不同城市数据
//const currentCityData = ref(allCityData.value[active.value]);错误，传入的为undefined
const currentCityData = computed(() => allCityData.value[active.value]);
</script>

<template>
  <div class="search hideBottomNav">
    <div class="top">
      <van-search
        v-model="serachCity"
        show-action
        placeholder="请输入搜索关键词"
        shape="round"
        @cancel="cancelSearch"
      />

      <van-tabs v-model:active="active" animated color="#ff9854">
        <template v-for="(value, key, index) in allCityData" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>

    <div class="content">
      <!-- 性能优化，v-show渲染后display:none -->
      <template v-for="(value, key) in allCityData">
        <cityIndexItem v-show="active === key" :allCityData="currentCityData" />
      </template>
    </div>
  </div>
</template>

<style lang='less' scoped>
.search {
  .top {
    position: relative;
    z-index: 5;
  }
  .content {
    //注意这里的空格
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>