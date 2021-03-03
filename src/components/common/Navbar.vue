<template>
  <van-nav-bar
      :title=title
      left-arrow
      @click-left="onClickLeft"
  />
</template>

<script>
import {Toast} from 'vant';
import {useRouter} from 'vue-router'

export default {
  name: "Navbar",
  props: ['title'],
  setup() {
    const router = useRouter()
    const onClickLeft = () => {
      router.push('/')
    };
    return {
      onClickLeft,
    };
  },
}
</script>

<style scoped>

</style>
