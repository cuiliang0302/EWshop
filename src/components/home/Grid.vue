<template>
  <van-grid :border="false" :column-num="4">
    <van-grid-item v-for="item in recommends.slice(0,4)" :key="item.id" @click="viewDetail(item.id)">
      <van-image :src="item.cover_url"/>
      <p>{{ item.title }}</p>
    </van-grid-item>
  </van-grid>
</template>

<script>
import {useRouter} from "vue-router";

export default {
  name: "Grid",
  setup() {
    const router = useRouter()
    const viewDetail = (detailId) => {
      // 点击跳转到商品详情页
      console.log("点击的id", detailId)
      router.push(`/detail/${detailId}`)
      // router.push({path: '/detail', query: {id}})
    }
    return {
      viewDetail
    }
  },
  props: {
    recommends: {
      type: Array, default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  text-align: center;
}
</style>
