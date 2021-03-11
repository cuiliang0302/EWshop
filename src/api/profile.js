import http from './http'

// 用户注册
export function register(data) {
  return http.post('/api/auth/register', data)
}
// 用户登录
export function login(data) {
  return http.post('/api/auth/login', data)
}
// 用户登录
export function logout() {
  return http.post('/api/auth/logout')
}
