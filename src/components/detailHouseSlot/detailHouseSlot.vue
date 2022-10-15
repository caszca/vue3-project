<script setup>
defineProps({
  title: {
    type: String,
    default: () => "",
  },
});
</script>

<template>
  <div class="detailHouseSlot">
    <div class="houseFacility"></div>
    <slot name="facility"> </slot>
    <div class="looking"></div>
  </div>
</template>

<style lang='less' scoped>
.detailHouseSlot {
  padding: 0 16px;
  border-top: 10px solid rgba(241, 243, 245);
}
</style>