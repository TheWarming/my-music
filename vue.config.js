module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
        'common': '@/common',
      }
    }
  },
  publicPath: '/my-music/',
  outputDir:'docs'
}
