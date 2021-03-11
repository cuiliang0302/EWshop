import http from './http'

// 获取分类数据
export function getCategoryData() {
  return http.get('/api/goods')
}

// 获取商品列表数据
export function getCategoryGoods(order = 'sales', cid = 0, page = 1) {
  return http.get('/api/goods?category_id=' + cid + '&page=' + page + '&' + order + '=1')
}
