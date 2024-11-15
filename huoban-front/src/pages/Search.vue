<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
const originTagList =  [
  {
    text: '性别',
    children: [
      { text: '男', id: '男' },
      { text: '女', id:'女' },
    ],
  },
  {
    text: '年级',
    children: [
      { text: '大一', id: '大一'},
      { text: '大二', id: '大二' },
      { text: '大三', id: '大三' },
      { text: '大四', id: '大四' },
    ],
  },
];
let tagList =ref( originTagList);
const onSearch = (val) => {
  tagList.value = originTagList
      .map(parentTag => {
        const tempChildren = [...(parentTag.children)];

        const tempParentTag = {...parentTag};
        tempParentTag.children = tempChildren
            .filter(item => item.text.includes(value.value));
        return tempParentTag;
      })

};
const onCancel = () => {
  value.value='';
  originTagList = tagList;
};
const show = ref(true);

//已选中的标签
const activeIds = ref([]);
const activeIndex = ref(0);

const doclose =(tag) =>{
  activeIds.value = activeIds.value.filter(item => {
    return item !== tag;
  })
}
</script>

<template>
  <form action="/">
    <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索的标签"
        @search="onSearch"
        @cancel="onCancel"

    />
    <van-divider>已选标签</van-divider>

<div v-if="activeIds.length === 0">请选择标签</div>
    <van-row gutter="20">
      <van-col  v-for="tag in activeIds">
        <van-tag closeable size="large" type="success" @close="doclose(tag)">
          {{tag}}
        </van-tag>
      </van-col>

    </van-row>
    <van-divider>选择标签</van-divider>
    <van-tree-select
        v-model:active-id="activeIds"
        v-model:main-active-index="activeIndex"
        :items="tagList"
    />

  </form>
</template>

<style scoped>

</style>