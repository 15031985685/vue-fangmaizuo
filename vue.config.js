module.exports = {
  devServer: {
    overlay: {
      warning: false,
      errors: false
    },
    proxy: {
      '/api': {
        target: 'http://m.maoyan.com',
        //   ws: true,
        changeOrigin: true
      }
    }
  }
}
