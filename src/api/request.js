import axios from 'axios'
import {Toast} from "vant";
import router from "@/router";

export function request(config) {
  // 创建axios的实例
  const instance = axios.create({
    baseURL: 'https://api.shop.eduwork.cn',
    timeout: 50000
  })
  // 请求拦截器配置
  instance.interceptors.request.use(config => {
      // config.headers.Authorization = window.sessionStorage.getItem('token')
      const token = window.sessionStorage.getItem('token')
      if (token) {
        config.headers.Authorization = 'Bearer' + token
      }
      return config
    }, error => {
      console.log(error)
      return Promise.error(error)
    }
  )
  // 响应拦截器配置
  instance.interceptors.response.use(response => {
    console.log(response)
    return response.data
  }, error => {
    console.log(error.response.data)
    switch (error.response.status) {
      case 401:
        Toast.fail("您无权访问，请先登录")
        router.push({path: '/login'})
        break
      case 403:
        console.log("token过期啦")
        break
      case 404:
        console.log("404啦")
        break
      default:
        return Promise.reject(error)
    }
    return Promise.reject(error)
  })
  // 发送真正的网络请求
  return instance(config);
}

export default request
