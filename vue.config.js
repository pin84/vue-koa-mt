// vue.config.js
module.exports = {
  publicPath: '/',
  devServer: {
    // proxy: {
    //   '/api': {
    //     target: "http://zs.pcm77.com",
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // },
    proxy: {
      '/api': {
        // target: "http://api.douban.com/v2",
        target: "http://zs.pcm77.com",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  }
}