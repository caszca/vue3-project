<script setup>
import { computed, ref, watch } from "vue";
import useHouseDetailStore from "@/stores/module/houseDetail";
import { storeToRefs } from "pinia";

const houseStore = useHouseDetailStore();

const { houseDetailData } = storeToRefs(houseStore);

const housePics = ref({});

const imgGroup = ref({});

//获取图片
//分类图片
watch(
  () => houseDetailData.value,
  (newValue, oldValue) => {
    housePics.value =
      houseDetailData.value.mainPart.topModule.housePicture.housePics;
    for (const element of housePics.value) {
      if (imgGroup.value[element.enumPictureCategory]) {
        imgGroup.value[element.enumPictureCategory] = [
          ...imgGroup.value[element.enumPictureCategory],
          element,
        ];
      } else imgGroup.value[element.enumPictureCategory] = [element];
    }
  },
  { deep: true }
);

//console.log(imgGroup.value);

const clearTitle = (title) => {
  return title.replace("：", "").replace("【", "").replace("】", "");
};
</script>

<template>
  <div class="houseSwiper">
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
      <template v-for="(item, index) in housePics" :key="index">
        <van-swipe-item>
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </template>

      <template #indicator="{ active, total }">
        <div class="custom-indicator">
          <template v-for="(value, key, index) in imgGroup" :key="key">
            <div
              :class="{
                title: true,
                active: housePics[active]?.enumPictureCategory == key,
              }"
            >
              {{ clearTitle(value[0].title) }}
              <span v-show="housePics[active]?.enumPictureCategory == key">
                {{
                  imgGroup[housePics[active]?.enumPictureCategory]?.findIndex(
                    (item) => item === housePics[active]
                  ) + 1
                }}/{{ imgGroup[key].length }}
              </span>
            </div>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<style lang='less' scoped>
.houseSwiper {
  .my-swipe {
    .custom-indicator {
      position: absolute;
      display: flex;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.5);
      .title {
        margin: 0 5px;
      }
      .active {
        padding: 0 5px 0;
        border-radius: 6px;
        color: rgba(51, 51, 51);
        background-color: #fff;
      }
    }
    img {
      width: 100%;
    }
  }
}
</style>