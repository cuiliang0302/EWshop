<template>
  <Navbar title="分类"></Navbar>
  <div class="main">
    <div class="order-tab">
      <van-tabs v-model:active="orderActive" @click="orderClick">
        <van-tab title="销量排序" name="salse"></van-tab>
        <van-tab title="价格排序" name="price"></van-tab>
        <van-tab title="评论排序" name="comment"></van-tab>
      </van-tabs>
    </div>
    <div class="content">
      <div class="category-tab">
        <van-sidebar v-model="leftActive">
          <van-collapse v-model="activeName" accordion>
            <van-collapse-item v-for="item in categoryList" :key="item.id" :title="item.name" :name="item.name">
              <van-sidebar-item v-for="sub in item.children" :key="sub.id" :title="sub.name" @click="leftClick(sub.id)">
              </van-sidebar-item>
            </van-collapse-item>
          </van-collapse>
        </van-sidebar>
      </div>
      <div class="goods-list">
        <van-list
            v-model:loading="state.loading"
            :finished="state.finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
          <van-card v-for="item in showGoods" :key="item.id"
                    :num="item.comments_count"
                    :price="item.price"
                    :desc="item.updated_at"
                    :title="item.title"
                    :thumb="item.cover_url"
          />
        </van-list>
      </div>
    </div>
  </div>
  <Tabbar></Tabbar>
</template>

<script>
import Navbar from "@/components/common/Navbar"
import Tabbar from "@/components/common/Tabbar"
import {ref, onMounted, computed, reactive} from "vue";
import {getCategoryData, getCategoryGoods} from "@/api/category";
import {Toast} from "vant";

export default {
  name: "Category",
  setup() {
    const leftActive = ref(2);
    const orderActive = ref(0);
    const activeName = ref(1);
    let categoryList = ref([])
    // 加载更多组件
    const state = reactive({
      loading: false,
      finished: false,
    });
    // 选中的分类id
    let categoryId = ref('1')
    // 排序方式
    let orderType = ref('salse')
    // 商品列表
    const goods = reactive({
      salse: {page: 1, list: []},
      price: {page: 1, list: []},
      comment: {page: 1, list: []}
    })
    const getGoods = () => {
      getCategoryGoods(orderActive.value, categoryId.value).then((response) => {
        console.log(response)
        goods[orderActive.value].list = response.goods.data
      }).catch(error => {
        //发生错误时执行的代码
        console.log(error)
      })
    }
    onMounted(() => {
      getCategoryData().then((response) => {
        console.log(response)
        categoryList.value = response.categories
      }).catch(error => {
        //发生错误时执行的代码
        console.log(error)
      })
      getGoods()
    })
    // 当前显示的商品列表
    const showGoods = computed(() => {
      return goods[orderType.value].list
    })
    // 点击排序
    const orderClick = (name, title) => {
      console.log(`排序方式 ${name}`);
      orderActive.value = name
      getGoods(orderActive.value, categoryId.value)
    }
    // 点击分类
    const leftClick = (id) => {
      console.log(`标签ID ${id}`);
      categoryId.value = id
      getGoods(orderActive.value, categoryId.value)
    }
    const onLoad = () => {
      console.log('触发下一页')
      const newPage = goods[orderType.value].page + 1
      getCategoryGoods(orderActive.value, categoryId.value, newPage).then((response) => {
        console.log(response)
        goods[orderActive.value].list.push(...response.goods.data)
        goods[orderActive.value].page++
        // 加载状态结束
        state.loading = false;
      }).catch(error => {
        //发生错误时执行的代码
        console.log(error)
      })
      // 数据全部加载完成
      if (showGoods.value.length >= 30) {
        state.finished = true;
      }
    };
    return {leftActive, orderActive, categoryList, activeName, orderClick, leftClick, showGoods, state, onLoad};
  },
  components: {
    Navbar,
    Tabbar
  },
}
</script>

<style lang="scss" scoped>
.main {
  .order-tab {
    margin-left: 110px;
    height: 50px;
    position: sticky;
    top: 47px;
    z-index: 2;
  }

  .content {
    display: flex;
    margin-bottom: 60px;

    .category-tab {
      flex: 1;
      position: fixed;
      top: 95px;
    }

    .goods-list {
      flex: 2;
      margin-left: 110px;
      margin-top: 45px;
    }
  }
}

.van-sidebar {
  width: 110px !important;
}

.van-card {
  width: 85% !important;
}
</style>
