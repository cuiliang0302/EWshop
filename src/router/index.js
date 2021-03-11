import {createRouter, createWebHistory} from 'vue-router'
import store from "@/store/index";
import {Toast} from 'vant'

const Home = () => import('@/views/Home.vue')
const Detail = () => import("@/views/Detail")
const Category = () => import("@/views/Category")
const Shopcart = () => import("@/views/Shopcart")
const Profile = () => import("@/views/Profile")
const Register = () => import("@/views/Register")
const Login = () => import("@/views/Login")
const Test = () => import("@/views/Test")
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
      title: '购物车',
      isAuth: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: '个人中心',
      isAuth: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: '用户注册'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '用户登录'
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

  if (to.meta.isAuth && store.state.user.isLogin === false) {
    Toast.fail('还未登录，跳转到登录页')
    return next('/login')
  } else {
    next()
  }
  document.title = to.meta.title
})
export default router
