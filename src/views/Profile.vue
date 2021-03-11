<template>
  <Navbar title="个人中心"></Navbar>
  <div class="main">
    <van-button type="primary" @click="tologout">退出</van-button>
  </div>
  <tabbar></tabbar>
</template>

<script>
import Navbar from "@/components/common/Navbar"
import Tabbar from "@/components/common/Tabbar"
import {logout} from "@/api/profile"
import {Toast} from "vant";
import {useRouter} from "vue-router";
import {useStore} from "vuex";

export default {
  name: "Profile",
  setup() {
    const router = useRouter()
    const store = useStore()
    const tologout = () => {
      logout().then((response) => {
        console.log(response)
        Toast.success('退出成功')
        window.sessionStorage.setItem('token', '')
        store.commit('setIsLogin',false)
        setTimeout(() => {
          router.push({path: '/login'})
        }, 1000)
      }).catch(error => {
        //发生错误时执行的代码
        console.log(error)
        Toast.fail('退出失败');
      })
    }
    return {
      tologout
    }
  },
  components: {
    Navbar,
    Tabbar
  },
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 50px;
}
</style>
