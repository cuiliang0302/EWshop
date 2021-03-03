<template>
  <Navbar title="title"></Navbar>
  <tabbar></tabbar>
</template>

<script>
import {ref} from 'vue'
import {useRoute} from 'vue-router'
import Navbar from "@/components/common/Navbar"
import Tabbar from "@/components/common/Tabbar"

export default {

  name: "Detail",
  setup() {
    const route = useRoute()
    let id = ref(0);
    id.value = route.params.id
    let title = '商品详情---' + id.value
    return {
      id, title
    }
  },
  components: {
    Navbar,
    Tabbar
  },
}
</script>

<style scoped>

</style>
