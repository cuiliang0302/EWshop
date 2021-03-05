<template>
  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="image in slides" :key="image.id">
      <img :src="image.img_url"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "Banner",
  props:{
    slides: {
      type: Array, default() {
        return []
      }
    }
  }
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
