<template>
  <van-list v-model:loading="state.loading" :finished="state.finished" finished-text="没有更多了" @load="onLoad">
    <van-grid :column-num="2">
      <van-grid-item v-for="item in state.list" :key="item" icon="photo-o" :text="item"/>
    </van-grid>
  </van-list>
</template>

<script>
import {reactive} from 'vue';
import {Toast} from 'vant';

export default {
  name: "Testcom",
  setup(props, {emit}) {
    const state = reactive({
      list: [],
      pageNum: 1,
      loading: false,
      finished: false,
    });

    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      console.log('触发加载更多')
      emit('onLoad', state)
    };

    return {
      state,
      onLoad,
    };
  },
}
</script>

<style scoped>

</style>
