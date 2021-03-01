<template>
  <h1>首页</h1>
</template>

<script>
// @ is an alias to /src
import {onMounted} from 'vue'
import {getHomeAllData} from '@/api/home'

export default {
  name: 'Home',
  components: {},
  setup() {
    onMounted(() => {
      getHomeAllData().then((response) => {
        console.log('正常响应')
        console.log(response)
      }).catch(error => {
        //发生错误时执行的代码
        console.log('异常响应')
        console.log(error)
      })
    })
  }
}
</script>
