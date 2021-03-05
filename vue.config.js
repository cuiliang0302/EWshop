module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'images': '@/assets/images',
        'style': '@/assets/style',
        'api': '@/api'
      }
    }
  },
  publicPath: '/'
}
