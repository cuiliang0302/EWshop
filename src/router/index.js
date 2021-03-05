import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue"
import Detail from "@/views/Detail"
import Category from "@/views/Category"
import Shopcart from "@/views/Shopcart"
import Profile from "@/views/Profile"
import Test from "@/views/Test";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '商城首页'
    }
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    meta: {
      title: '商品信息'
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      title: '商品分类'
    }
  },
  {
    path: '/shopcart',
    name: 'Shopcart',
    component: Shopcart,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
    meta: {
      title: '测试页'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// 路由导航守卫
router.beforeEach((to, from, next) => {
  // to 访问的路径 from 从哪来 next 响应路径
  next()
  document.title = to.meta.title
})
export default router
