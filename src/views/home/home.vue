<script setup>
</script>

<template>
  <div class="nav-bar">
    <span class="title">弘源旅途</span>
  </div>
  <div class="banner">
    <img src="@/assets/img/home/banner.webp" alt="" />
  </div>

  <div class="location">
    <div class="city">广州</div>
    <div class="position">
      <span>我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="" />
    </div>
  </div>
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

.location {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  .city {
    flex: 1;
  }
  .position {
    display: flex;
    align-items: center;

    img {
      margin: 5px;
      width: 18px;
    }
  }
}
</style>