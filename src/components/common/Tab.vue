<template>
  <van-tabs :active="active" @click="clickTab" sticky>
    <van-tab v-for="(item,index) in tabList" :key=index :title=item>
      <van-list v-model:loading="state.loading" :finished="state.finished" finished-text="没有更多了" @load="onLoad">
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
    goods: {
      type: Array, default() {
        return []
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
    const state = reactive({
      list: [],
      loading: false,
      finished: false,
    });
    let pageNum = 1
    const onLoad = () => {
      pageNum ++
      console.log('获取下一页', pageNum)
      emit('onLoad', pageNum)
      console.log('传完页数了')
    }
    // const onLoad = () => {
    //   // 异步更新数据
    //   // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    //   setTimeout(() => {
    //     pageNum++
    //     console.log('下一页', pageNum)
    //     for (let i = 0; i < 10; i++) {
    //       state.list.push(state.list.length + 1);
    //     }
    //
    //     // 加载状态结束
    //     state.loading = false;
    //
    //     // 数据全部加载完成
    //     if (state.list.length >= 100) {
    //       state.finished = true;
    //     }
    //   }, 1000);
    // };
    return {
      active, clickTab, showInfo, state,
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
