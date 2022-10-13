<script setup>
import navLocation from "./cpns/navLocation.vue";
import categories from "./cpns/categories.vue";
import homeContent from "./cpns/homeContent.vue";
import loading from "@/components/loading/loading.vue";
</script>

<template>
  <div class="home">
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