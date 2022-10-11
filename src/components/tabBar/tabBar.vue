<!-- 底部路由导航 -->
<script setup>
import { ref } from "vue";
const active = ref(0);
</script>

<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="search" to="/collect">收藏</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/order">订单</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/message">信息</van-tabbar-item>
  </van-tabbar>
</template>

<style lang='less'>
</style>