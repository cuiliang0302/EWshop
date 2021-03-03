<template>
  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "Banner",
  setup() {
    const images = [
      'https://img01.yzcdn.cn/vant/apple-1.jpg',
      'https://img01.yzcdn.cn/vant/apple-2.jpg',
    ];
    return {images};
  },
}
</script>

<style lang="scss" scoped>
.van-swipe{
  img{
    width: 100%;
    height: auto;
  }
}
</style>
