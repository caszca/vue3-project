<script setup>
import { ref, watch } from "vue";
import DetailHouseSlot from "@/components/detailHouseSlot/detailHouseSlot.vue";
import useHouseDetailStore from "@/stores/module/houseDetail";
import { storeToRefs } from "pinia";

const houseStore = useHouseDetailStore();
const { houseDetailData } = storeToRefs(houseStore);
const houseFacility = ref({});
watch(
  () => houseDetailData.value,

  () => {
    houseFacility.value =
      houseDetailData.value.mainPart.dynamicModule.facilityModule.houseFacility;
  },
  { deep: true }
);
</script>

<template>
  <div class="houseFacilitySlot">
    <DetailHouseSlot v-if="houseFacility">
      <template #facility>
        插槽这块就不弄了，数据太麻烦了，但还是运用插槽了，熟悉一下，因为服务器返回的数据太烦躁了
      </template>
    </DetailHouseSlot>
  </div>
</template>

<style lang='less' scoped>
.houseFacilitySlot {
}
</style>