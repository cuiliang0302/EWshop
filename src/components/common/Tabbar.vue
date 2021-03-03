<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/category" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item replace to="/shopcart" icon="shopping-cart-o" badge="0">购物车</van-tabbar-item>
    <van-tabbar-item replace to="/profile" icon="friends-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "Tabbar",
  setup() {
    const active = ref(0);
    return { active };
  }
}
</script>

<style scoped>

</style>
