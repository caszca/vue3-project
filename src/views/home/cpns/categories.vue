<!-- 可搜索分类展示 -->

<script setup>
import useHomestore from "@/stores/module/home";
import { storeToRefs } from "pinia";
const homeStore = useHomestore();
homeStore.fitchCategoried();
const { categoriesData } = storeToRefs(homeStore);
</script>

<template>
  <div class="categories">
    <template v-for="item in categoriesData" :key="item.id">
      <div class="category">
        <img :src="item.pictureUrl" alt="" />
        <span>{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>

<style lang='less' scoped>
.categories {
  display: flex; /* 下面tabbar扩展到与categories（包括超出部分）等比例位置（不合理之处）， */
  overflow-x: auto;

  background-color: #fbfbfb;
  margin-top: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
  .category {
    display: flex;
    flex-direction: column;
    align-items: center;

    flex-shrink: 0;
    margin-right: 26px;
    padding-left: 20px;
    img {
      width: 32px;
      height: 32px;
    }
    span {
      margin-top: 5px;
      font-size: 12px;
    }
  }
}
</style>