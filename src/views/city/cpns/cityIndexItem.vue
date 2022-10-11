<!-- 封装城市索引展示 -->

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/module/city";
const cityStore = useCityStore();
const router = useRouter();
//传入props
const props = defineProps({
  allCityData: {
    type: Object,
    default: () => ({}),
  },
});

//获得侧边栏字母
const getLetterIndex = computed(() => {
  const list = props.allCityData.cities?.map((item) => item.group);
  list?.unshift("#");
  return list;
});

//点击城市获取城市信息
const cityClick = (city) => {
  router.back(); //返回上一级，因为多页面能获取地址
  cityStore.currentCity = city;
};
</script>


<template>
  <div>
    <van-index-bar :index-list="getLetterIndex" highlight-color="#ff9854">
      <van-index-anchor index="热门" />
      <div class="hotCityGroup">
        <template v-for="city in allCityData.hotCities">
          <div class="hotCity" @click="cityClick(city)">
            {{ city.cityName }}
          </div>
        </template>
      </div>
      <template v-for="cityGroup in allCityData.cities" :key="cityGroup.group">
        <van-index-anchor :index="cityGroup.group">{{
          cityGroup.group
        }}</van-index-anchor>

        <template v-for="city in cityGroup.cities" :key="city.cityId">
          <van-cell :title="city.cityName" @click="cityClick(city)" />
        </template>
      </template>

      ...
    </van-index-bar>
  </div>
</template>

<style lang='less'>
.hotCityGroup {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 14px;
  padding: 0 24px 0 10px;

  .hotCity {
    width: 70px;
    height: 28px;
    background-color: #fff4ec;
    border-radius: 14px;
    text-align: center;
    line-height: 28px;
    color: #000;
    margin-bottom: 12px;
  }
}
</style>