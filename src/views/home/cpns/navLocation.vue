<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/stores/module/city";
import { formatDate, addOneDay, getstayDay } from "@/utils/dayjs";
import useHomestore from "@/stores/module//home";
import { storeToRefs } from "pinia";

const homeStore = useHomestore();
//homeStore.fitchHotSuggestsCities();
homeStore.fitchHotSuggestsCities();
const { hotSuggestsCities } = storeToRefs(homeStore);
const cityStore = useCityStore();
const router = useRouter();

//直接获取当前位置
const getPosition = () => {
  console.log("点击了");
  navigator.geolocation.getCurrentPosition(
    (res) => console.log("success", res),
    (error) => console.log(error)
  );
};

//点击获取地址跳转到
const searchCity = () => {
  router.push("/city");
};

//日历显示
const show = ref(false);

//获取日历选择日期
const startTime = ref();
startTime.value = formatDate(new Date());

const endTime = ref();
endTime.value = addOneDay(new Date());

const stayTime = ref(1);
const onConfirm = (value) => {
  show.value = false;

  stayTime.value = getstayDay(value[0], value[1]);
  startTime.value = formatDate(value[0]);
  endTime.value = formatDate(value[1]);
};

//开始搜索按钮跳转
const startSearch = () => {
  router.push("/search");
};
</script>

<template>
  <div class="location boder-bottom-line">
    <div class="city" @click="searchCity">
      {{ cityStore.currentCity.cityName || "雾都" }}
    </div>
    <div class="position" @click="getPosition">
      <span>我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="" />
    </div>
  </div>
  <van-calendar
    v-model:show="show"
    type="range"
    @confirm="onConfirm"
    color="#ff9854"
  />
  <!-- 注意放置位置，最开始放在里面点击事件冒泡页面关不掉 -->

  <div class="dayTime boder-bottom-line">
    <div class="startTime" @click="show = true">
      <span class="message">入住</span>
      <span>{{ startTime }}</span>
    </div>
    <div class="stayTime message">
      {{ `共${stayTime}天` }}
    </div>
    <div class="endTime" @click="show = true">
      <span class="message">离店</span>
      <span>{{ endTime }}</span>
    </div>
  </div>

  <div class="tip boder-bottom-line">
    <div class="price">价格不限</div>
    <div class="human">人数不限</div>
  </div>

  <div class="keyWord boder-bottom-line">关键字/位置/民宿名</div>

  <div class="hotSuggest">
    <template
      v-for="(item, index) in hotSuggestsCities"
      :key="item.tagText.text"
    >
      <div
        class="hotCity"
        :style="{
          color: item.tagText.color,
          background: item.tagText.background.color,
        }"
      >
        {{ item.tagText.text }}
      </div>
    </template>
  </div>

  <div class="btn" @click="startSearch">开始搜索</div>
  <div class="tips message">民宿预定服务由途家网提供</div>
</template>

<style lang='less'>
.location {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 20px;
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

.dayTime {
  display: flex;
  justify-content: space-between;
  height: 44px;
  padding: 0 25px 0 20px; //可以抽取到公共样式
  .startTime {
    display: flex;
    flex-direction: column;
    justify-content: center;

    span:nth-child(2) {
      font-size: 15px;
      color: #333;
      font-weight: 500;
    }
  }
  .stayTime {
    display: flex;
    align-items: center;
  }
  .endTime {
    .startTime();
  }
}

.tip {
  display: flex;
  justify-content: space-between;
  padding: 0 25px 0 20px;
  line-height: 40px;
  height: 40px;
  color: #999;
  .price {
    flex: 1;
    border-right: 1px solid #faf8f9;
  }
  .human {
    padding-left: 30px;
  }
}
.keyWord {
  .tip();
}

.hotSuggest {
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  padding: 0 25px 0 20px;
  margin-top: 10px;
  .hotCity {
    padding: 4px 8px;
    border-radius: 10px;
    margin: 5px 5px 0 0;
  }
}

.btn {
  text-align: center;
  line-height: 36px;
  height: 36px;
  font-size: 18px;
  color: #ffff;
  font-weight: 500;
  background-color: var(--primary-color);
  margin: 20px 25px 0 20px;
  border-radius: 18px;
}

.tips {
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
}
</style>