<script setup>
const props = defineProps({
  houseList: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="houseV9">
    <img :src="houseList.image.url" alt="" />

    <div class="good">优选PRO</div>
    <div class="information">
      <div class="summary">{{ houseList.summaryText }}</div>
      <div class="houseName">{{ houseList.houseName }}</div>
      <!-- commentScore原为小数 -->
      <van-rate
        :modelValue="Number(houseList.commentScore)"
        :size="10"
        readonly
        allow-half
        color="#fff"
      />
      <div class="price">¥{{ houseList.finalPrice }}</div>
    </div>
  </div>
</template>

<style lang='less' scoped>
.houseV9 {
  width: 50%;
  padding: 0 5px 10px 0;
  position: relative;
  img {
    border-radius: 10px;
    width: 100%;
  }

  .good {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 0 5px;
    background-color: #fff;
    font-size: 10px;
    border-radius: 6px;
  }

  .information {
    position: absolute;
    bottom: 20px;
    padding: 0 10px;
    color: #fff;
    .summary {
      font-size: 10px;
      margin-bottom: 5px;
    }
    .houseName {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-size: 14px;
      margin-bottom: 6px;
    }

    .price {
      position: absolute;
      bottom: -1px;
      right: 15px;
      font-size: 16px;
    }
  }
}
</style>