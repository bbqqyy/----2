<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref} from "vue";
const route = useRoute();
const editUser = ref({
  editKey:route.query.editKey,
  editName:route.query.editName,
  currentValue:route.query.currentValue
})
const onSubmit = (values) => {
  console.log('submit', values);
};

</script>

<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="editUser.currentValue"
          :name="editUser.editKey"
          :label="editUser.editName"
          :placeholder="`请输入${editUser.editName}`"

      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        确认修改
      </van-button>
    </div>
  </van-form>
</template>

<style scoped>

</style>