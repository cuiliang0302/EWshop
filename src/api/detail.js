import http from './http'

// 获取商品详情数据
export function getDetailData(id) {
  return http.get('/api/goods/' + id)
}
