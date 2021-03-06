<template>
  <van-tabs :active="active" @click="clickTab" sticky>
    <van-tab v-for="(item,index) in tabList" :key=index :title=item>
      <van-list v-model:loading="tabState.loading" :finished="tabState.finished" finished-text="没有更多了" @load="onLoad">
        <Grid :recommends="goodsList" :column-num="goodsColumn" :showInfo="showInfo"></Grid>
      </van-list>
    </van-tab>
  </van-tabs>
</template>

<script>
import {reactive, ref} from 'vue'
import {Toast} from 'vant'
import Grid from "@/components/common/Grid";

export default {
  name: "Tab",
  props: {
    tabList: {
      type: Array,
      default() {
        return [];
      }
    },
    goodsList: {
      type: Array, default() {
        return []
      }
    },
    goodsColumn: {
      type: Number, default() {
        return 2
      }
    }
  },
  setup(props, {emit}) {
    const active = ref(0);
    const showInfo = true
    // tab标签栏切换
    const clickTab = (title) => {
      emit('clickTab', title)
    }
    const tabState = reactive({
      pageNum: 1,
      loading: false,
      finished: false,
    });
    const onLoad = () => {
      console.log('触发加载更多')
      emit('onLoad', tabState)
    }
    // const onLoad = () => {
    //   // 异步更新数据
    //   // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    //   setTimeout(() => {
    //     pageNum++
    //     console.log('下一页', pageNum)
    //     for (let i = 0; i < 10; i++) {
    //       tabState.list.push(tabState.list.length + 1);
    //     }
    //
    //     // 加载状态结束
    //     tabState.loading = false;
    //
    //     // 数据全部加载完成
    //     if (tabState.list.length >= 100) {
    //       tabState.finished = true;
    //     }
    //   }, 1000);
    // };
    return {
      active, clickTab, showInfo, tabState,
      onLoad,
    };
  },
  components: {
    Grid
  }
}
</script>

<style scoped>

</style>
