<script setup>
import { ref, watch } from "vue";
import useHouseDetailStore from "@/stores/module/houseDetail";
import { storeToRefs } from "pinia";

const houseStore = useHouseDetailStore();
const { houseDetailData } = storeToRefs(houseStore);

const topModule = ref({});
watch(
  () => houseDetailData.value,
  () => {
    topModule.value = houseDetailData.value.mainPart.topModule;
    console.log(topModule.value);
  },
  { deep: true }
);
</script>

<template>
  <div class="houseDescribe">
    <div class="title">{{ topModule.houseName }}</div>
    <div class="houseTags" v-if="topModule.houseTags">
      <template v-for="(value, key, index) in topModule.houseTags" :key="index">
        <span
          class="tagText"
          :style="{
            background: value.tagText.background.color,
            color: value.tagText.color,
          }"
          v-if="value.tagText"
          >{{ value.tagText.text }}</span
        >
      </template>
    </div>

    <div class="comment" v-if="topModule.commentBrief">
      <div class="commentBrief">
        <div class="score">{{ topModule.commentBrief.overall }}</div>
        <div class="scoreTitle">
          {{ topModule.commentBrief.scoreTitle }}
        </div>
        <div class="userComment">
          "{{ topModule.commentBrief.commentBrief }}"
        </div>
      </div>
      <div class="moreComment">
        <div class="totalCount">
          {{ topModule.commentBrief.totalCount }}条评论
          <van-icon name="arrow" size="12" />
        </div>
      </div>
    </div>

    <div class="address" v-if="topModule.nearByPosition">
      <div class="nowPosition">
        <div class="position">
          {{ topModule.nearByPosition.address }}
        </div>
        <div class="tradeArea">{{ topModule.nearByPosition.tradeArea }}</div>
      </div>

      <div class="nearBy">
        地图·周边
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped>
.houseDescribe {
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 20px;
    color: #333;
    font-weight: 700;
  }
  .houseTags {
    display: flex;
    flex-wrap: wrap;
    .tagText {
      font-size: 10px;
      padding: 2px 4px;
      margin: 4px 4px 0 0;
    }
  }
  .comment {
    display: flex;
    justify-content: space-between;
    height: 30px;
    background-color: rgba(245, 247, 250);
    margin-top: 8px;
    padding: 0 8px;
    border-radius: 5px;

    .commentBrief {
      flex: 1;
      display: flex;
      .score {
        line-height: 30px;
        font-size: 18px;
        font-weight: 700;
      }
      .scoreTitle {
        margin-right: 14px;
        font-size: 12px;
        font-weight: 700;
        padding: 5px 0 0 0;
      }

      .userComment {
        line-height: 30px;
        color: #999;
        font-size: 13px;
      }
    }

    .moreComment {
      .totalCount {
        font-size: 10px;
        line-height: 30px;
        color: var(--primary-color);
      }
    }
  }

  .address {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    background-color: rgba(245, 247, 250);
    padding: 0 8px;
    border-radius: 5px;

    .nowPosition {
      flex: 3;
      padding: 14px 0;
      .position {
        font-size: 14px;
        font-weight: 700;
        width: 230px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .tradeArea {
        color: #999;
        font-size: 12px;
        width: 230px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .nearBy {
      display: flex;
      align-items: center;
      font-size: 10px;
      color: var(--primary-color);
    }
  }
}
</style>