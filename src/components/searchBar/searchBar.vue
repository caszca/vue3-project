<!-- 封装一个搜索框 -->

<script setup>
import { computed } from "vue";
import { formatDate } from "@/utils/dayjs";
import useMainStore from "@/stores/module/main";
import { storeToRefs } from "pinia";
const mainStore = useMainStore();
const { startDate, endDate } = storeToRefs(mainStore);
const startTime = computed(() => formatDate(startDate.value, "MM.DD"));
const endTime = computed(() => formatDate(endDate.value, "MM.DD"));
</script>

<template>
  <div class="searchBar">
    <div class="time">
      <div class="allTime">
        <div class="startTime">
          <span class="message">住</span>
          {{ startTime }}
        </div>
        <div class="endTime">
          <span class="message">离</span>
          {{ endTime }}
        </div>
      </div>
    </div>
    <div class="search">
      <div class="tips">关键字/位置/民宿名</div>
      <van-icon name="search" size="26px" color="#999" />
    </div>
  </div>
</template>

<style lang='less' scoped>
.searchBar {
  position: fixed;
  top: 0;
  display: flex;
  z-index: 9;
  padding: 16px 16px 10px;
  height: 71px;
  width: 100%;
  background-color: #fff;
  .time {
    display: flex;
    align-items: center;
    padding: 0 10px;
    background-color: #f2f4f6;
    border-radius: 5px 0 0 5px;
    border-right: 2px solid #fff;
    .startTime {
      color: #59595a;
    }
    .endTime {
      .startTime();
    }
  }

  .search {
    flex: 1;
    position: relative;
    background-color: #f2f4f6;
    border-radius: 0 5px 5px 0;

    .tips {
      position: absolute;
      top: 8px;
      left: 5px;
      font-size: 14px;
      color: #999;
    }

    :deep(.van-icon) {
      position: absolute;
      top: 10px;
      right: 5px;
    }
  }
}
</style>