import http from './http'

export function getHomeAllData(){
  return http.get('/api/index')
}
