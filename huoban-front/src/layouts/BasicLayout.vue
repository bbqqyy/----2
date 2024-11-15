<script setup lang="ts">
import { ref } from 'vue';
import { showToast } from 'vant';
import {useRouter} from "vue-router";

const router = useRouter();
const onClickLeft = () => {
  router.back();
};
const onClickRight = () =>{
  router.push('/search');
} ;

const active = ref("index");
const onChange = (index) => showToast(`标签 ${index}`);
</script>

<template>

  <van-nav-bar
      title="标题"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fixed="true"
  >
  <template #right>
    <van-icon name="search" size="18" />
  </template>
  </van-nav-bar>
  <div class="container">
    <router-view></router-view>
</div>
    <van-tabbar route>
      <van-tabbar-item icon="home-o" name="index" replace to="/index">主页</van-tabbar-item>
      <van-tabbar-item icon="search" name="team" replace to="/team">队伍页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" name="user" replace to="/user">个人</van-tabbar-item>
    </van-tabbar>


</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 这确保内容与顶端对齐 */
  height: 80vh; /* 确保容器高度充满视口高度 */
}
</style>