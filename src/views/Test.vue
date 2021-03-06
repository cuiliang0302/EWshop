<template>
  <van-tabs v-model:active="active" sticky>
    <van-tab title="标签 1">
      <Testcom @onLoad="onLoad"></Testcom>
    </van-tab>
    <van-tab title="标签 2">
      <Testcom @onLoad="onLoad"></Testcom>
    </van-tab>
  </van-tabs>

</template>

<script>
import {ref} from 'vue';
import Testcom from "@/components/Testcom";

export default {
  name: "Test",
  setup() {
    const active = ref(0);
    const onLoad = (state) => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      console.log("开始请求数据", state.pageNum)
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          state.list.push((state.list.length + 1).toString());
        }
        state.pageNum++
        // 加载状态结束
        state.loading = false;

        // 数据全部加载完成
        if (state.list.length >= 100) {
          state.finished = true;
        }
      }, 1000);
    }
    return {
      active,onLoad,
    };
  },
  components: {
    Testcom,
  }
}
</script>

<style scoped>

</style>
