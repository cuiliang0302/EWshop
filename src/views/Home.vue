<template>
  <Navbar title="首页"></Navbar>
  <Banner></Banner>
  <Grid :recommends="recommends"></Grid>
  <Tabbar></Tabbar>
</template>

<script>
// @ is an alias to /src
import {onMounted, ref} from 'vue'
import {Toast} from 'vant'
import {getHomeAllData} from '@/api/home'
import Tabbar from "@/components/common/Tabbar"
import Navbar from "@/components/common/Navbar"
import Banner from "@/components/home/Banner"
import Grid from "@/components/home/Grid"

export default {
  name: 'Home',
  setup() {
    let recommends = ref([])
    onMounted(() => {
      getHomeAllData().then((response) => {
        console.log('正常响应')
        console.log(response)
        recommends.value = response.goods.data
      }).catch(error => {
        //发生错误时执行的代码
        console.log('异常响应')
        console.log(error)
        Toast.fail('服务器异常');
      })
    })
    return {
      recommends
    }
  },
  components: {
    Navbar,
    Banner,
    Grid,
    Tabbar
  }
}
</script>
