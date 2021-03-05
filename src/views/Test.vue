<template>
  <h1>测试页</h1>
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
  name: "Test",
  setup() {
    const state = reactive({
      list: [],
      loading: false,
      finished: false,
    });
    let pageNum = 1

    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        pageNum++
        console.log('下一页', pageNum)
        for (let i = 0; i < 10; i++) {
          state.list.push(state.list.length + 1);
        }

        // 加载状态结束
        state.loading = false;

        // 数据全部加载完成
        if (state.list.length >= 100) {
          state.finished = true;
        }
      }, 1000);
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
