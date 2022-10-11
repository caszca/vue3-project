<script setup>
import navLocation from "./cpns/navLocation.vue";
</script>

<template>
  <div class="nav-bar">
    <span class="title">弘源旅途</span>
  </div>
  <div class="banner">
    <img src="@/assets/img/home/banner.webp" alt="" />
  </div>
  <navLocation />
</template>

<style lang='less' scoped>
.nav-bar {
  display: flex;
  height: 46px;
  justify-content: center;
  align-items: center;

  .title {
    color: var(--primary-color);
  }
}

.banner {
  img {
    width: 100%;
  }
}
</style>