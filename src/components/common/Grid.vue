<template>
  <van-grid :border="false" :column-num="columnNum">
    <van-grid-item v-for="item in recommends" :key="item.id" @click="viewDetail(item.id)">
      <van-image :src="item.cover_url"/>
      <p>{{ item.title }}</p>
      <span v-if="showInfo">
        <van-icon name="gold-coin-o"/>{{ item.price }}
        <van-icon name="star-o"/>{{ item.sales }}
      </span>
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
      router.push(`/detail/${detailId}`)
    }
    return {
      viewDetail
    }
  },
  props: {
    // 推荐列表
    recommends: {
      type: Array, default() {
        return []
      }
    },
    // 推荐列表显示列数
    columnNum: {
      type: Number, default() {
        return 4
      }
    },
    // 列表中是否显示商品详细信息
    showInfo: {
      type: Boolean, default() {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  text-align: center;
}

span {
  color: gray;

  .van-icon {
    vertical-align: -2px;
  }
}
</style>
