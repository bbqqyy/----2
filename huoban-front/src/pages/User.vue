<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();
const user={
  id:1,
  username:"bqy",
  userAccount:"bqynb",
  avatarUrl:"public/微信图片_20230207202227.jpg",
  gender:"男",
  telephone:'12345678',
  email :'123456',
  createTime:new Date(),
  planetCode:2,

}
   const toEdit = (editKey:string,editName:string,currentValue:string) => {
  router.push({
    path:'/user/edit',
    query:{
      editKey,
      editName,
      currentValue,
    },
  })
}
</script>

<template>

  <van-cell title="用户名" is-link :value="user.username" @click="toEdit('用户名','username',user.username)"/>
  <van-cell title="账号" value="user.userAccount" />
  <van-cell title="头像" is-link @click="toEdit('avatarUrl','头像',user.avatarUrl)" >
    < img style="height: 48px" :src="user.avatarUrl">
  </van-cell>

  <van-cell title="性别" is-link :value="user.gender" @click="toEdit('gender','性别',user.gender)" />
  <van-cell title="电话" is-link :value="user.telephone" @click="toEdit('telephone','电话',user.telephone)"/>
  <van-cell title="邮箱" is-link  :value="user.email" @click="toEdit('email','邮件',user.email)"/>
  <van-cell title="星球编号"  :value="user.planetCode" />
  <van-cell title="注册时间"  :value="user.createTime.toISOString()" />

</template>

<style scoped>

</style>