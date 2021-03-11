<template>
  <Navbar title="首页"></Navbar>
  <van-pull-refresh v-model="state.loading" @refresh="onRefresh">
    <Banner :slides="slides"></Banner>
    <Grid :recommends="recommends" :columnNum="columnNum"></Grid>
    <Tab :tabList="tabList" @click="clickTab" :goodsList="goodsList"
         :goodsColumn="goodsColumn" @onLoad="onLoad"></Tab>
  </van-pull-refresh>
  <BackTop @backTop="backTop"></BackTop>
  <Tabbar></Tabbar>
</template>

<script>
// @ is an alias to /src
import {onMounted, reactive, ref, watchEffect} from 'vue'
import {Toast} from 'vant'
import {getHomeAllData} from '@/api/home'
import Tabbar from "@/components/common/Tabbar"
import Navbar from "@/components/common/Navbar"
import Banner from "@/components/home/Banner"
import Grid from "@/components/common/Grid"
import Tab from "@/components/common/Tab";
import BackTop from "@/components/common/BackTop";

export default {
  name: 'Home',
  setup() {
    // 轮播图列表
    let slides = ref([])
    // 首页推荐商品列表
    let recommends = ref([])
    // 推荐列表显示列数
    let columnNum = 4
    // Tab 标签商品列表
    let goodsList = ref([])
    // Tab 标签商品列数
    let goodsColumn = 2
    // Tab 标签分类名
    let tabList = ['畅销', '新书', '精选']
    // 下拉刷新更多组件
    const state = reactive({
      count: 0,
      loading: false,
    });
    // 下拉刷新
    const onRefresh = () => {
      getHomeAllData().then((response) => {
        console.log(response)
        recommends.value = response.goods.data.slice(0, 4)
        slides.value = response.slides
        goodsList.value = response.goods.data
        Toast('刷新成功');
        state.loading = false;
        state.count++;
      }).catch(error => {
        //发生错误时执行的代码
        console.log(error)
        Toast.fail('服务器异常');
      })
    };
    onMounted(() => {
      // 获取首页数据
      getHomeAllData().then((response) => {
        console.log(response)
        recommends.value = response.goods.data.slice(0, 4)
        slides.value = response.slides
        // goodsList.value = response.goods.data
      }).catch(error => {
        //发生错误时执行的代码
        console.log(error)
        Toast.fail('服务器异常');
      })
    })
    // 点击分类标签切换
    const clickTab = (index) => {
      let types = ['sales', 'recommend', 'new']
      // 获取图书数据列表
      getHomeAllData(types[index]).then((response) => {
        console.log(response)
        goodsList.value = response.goods.data
      }).catch(error => {
        //发生错误时执行的代码
        console.log(error)
        Toast.fail('服务器异常');
      })
    }
    // 上拉加载下一页数据
    const onLoad = (tabState) => {
      console.log('开始请求新数据', tabState.pageNum)
      if (goodsList.value.length >= 30) {
        tabState.finished = true;
      }
      getHomeAllData('sales', tabState.pageNum).then((response) => {
        tabState.pageNum++
        goodsList.value.push(...response.goods.data)
        tabState.loading = false;
      }).catch(error => {
        //发生错误时执行的代码
        console.log(error)
        Toast.fail('服务器异常');
      })
    }
    // 回到顶部
    const backTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    return {
      slides,
      recommends,
      tabList,
      clickTab,
      columnNum,
      goodsList,
      goodsColumn,
      state,
      onRefresh,
      onLoad,
      backTop
    }
  },
  components: {
    Navbar,
    Banner,
    Grid,
    Tab,
    Tabbar,
    BackTop
  }
}
</script>
<style lang="scss">

</style>
