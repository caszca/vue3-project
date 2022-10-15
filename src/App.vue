<script setup>
import tabBar from "@/components/tabBar/tabBar.vue";
</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive include="home">
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <tabBar />
</template>

<style scoped>
</style>
