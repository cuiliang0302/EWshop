import http from './http'
// 获取首页数据
export function getHomeAllData(type = 'sales', page = 1) {
  return http.get('/api/index?' + type + '=1&page=' + page)
}
