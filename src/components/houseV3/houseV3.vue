<script setup>
const props = defineProps({
  houseList: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="houseV3">
    <img :src="houseList.image.url" alt="" />
    <div class="imformation">
      <img src="../../assets/img/home/location.png" alt="" />
      <span class="message">{{ houseList.location }}</span>
      <div class="home">{{ houseList.houseName }}</div>
      <div class="furniture message">{{ houseList.summaryText }}</div>
      <div class="price">￥{{ houseList.finalPrice }}</div>
    </div>
  </div>
</template>

<style lang='less' scoped>
.houseV3 {
  width: 50%;
  padding: 0 5px 10px 0;

  //padding: 5px 10px;
  img {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
  .imformation {
    padding: 5px 10px;
    img {
      width: 15px;
    }
    .home {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-size: 13px;
      color: #333;
      margin-top: 5px;
    }
    .furniture {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-top: 5px;
    }

    .price {
      font-size: 16px;
      margin-top: 10px;
      color: var(--primary-color);
    }
  }
}
</style>