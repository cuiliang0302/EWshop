<template>
  <transition name="van-slide-up">
    <div class="app" v-show="isShowTop" @click="backTop">
      <img src="@/assets/images/up.png">
    </div>
  </transition>
</template>

<script>
import {onMounted, reactive, ref} from 'vue'

export default {
  name: "BackTop",
  setup(props, {emit}) {
    let isShowTop = ref(false)

    function scrollTop() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop <= 500) {
        isShowTop.value = false
      } else {
        isShowTop.value = true
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', scrollTop)
    })
    const backTop = () => {
      emit('backTop')
    }
    return {isShowTop, backTop}
  }
}
</script>

<style lang="scss" scoped>
.app {
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 80px;
  right: 30px;
  z-index: 20;
  box-shadow: 2px 2px 5px #000;
  border-radius: 20px;
  background-color: white;

  img {
    width: 100%;
  }
}
</style>
