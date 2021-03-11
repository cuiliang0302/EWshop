<template>
  <Navbar :title="book.detail.title"></Navbar>
  <div class="main">
    <van-image width="100%" :src="book.detail.cover_url"/>
    <van-card
        :num="book.stock"
        :price="book.detail.price+'.00'"
        :desc="book.detail.description"
        :title="book.detail.title"
    >
      <template #footer>
        <van-button type="warning">加入购物车</van-button>
        <van-button type="danger">立即购买</van-button>
      </template>
    </van-card>
    <van-tabs v-model:active="active">
      <van-tab title="概述">
        <div v-html="book.detail.details"></div>
      </van-tab>
      <van-tab title="评论">内容 2</van-tab>
      <van-tab title="相关图书">
        <Grid :recommends="book.like_goods" :columnNum="2"></Grid>
      </van-tab>
    </van-tabs>
  </div>
  <Tabbar></Tabbar>
</template>

<script>
import {ref, onMounted, reactive} from 'vue'
import {useRoute} from 'vue-router'
import Navbar from "@/components/common/Navbar"
import Tabbar from "@/components/common/Tabbar"
import {getDetailData} from "@/api/detail";
import Grid from "@/components/common/Grid";
export default {

  name: "Detail",
  setup() {
    const route = useRoute()
    let id = ref(1);
    id.value = route.params.id
    let book = reactive({
      detail: {},
      like_goods: []
    })
    const active = ref(0);
    onMounted(() => {
      getDetailData(id.value).then((response) => {
        console.log(response)
        book.detail = response.goods
        book.like_goods = response.like_goods
      }).catch(error => {
        //发生错误时执行的代码
        console.log(error)
      })
    })
    return {
      id, book, active
    }
  },
  components: {
    Navbar,
    Tabbar,
    Grid
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 50px;
}
</style>
