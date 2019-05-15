module.exports = {
  devServer: {
    port: 9001
  },
  filenameHashing: false,
  publicPath: './',
  productionSourceMap: process.env.NODE_ENV !== 'development',
  outputDir: 'dist',
  lintOnSave: true,
  pages: {
    index: {
      // 页面的入口文件
      entry: 'src/index/main',
      // 页面的模板文件
      template: 'public/index.html',
      // build 生成的文件名称  例： dist/index.html
      filename: 'index.html'
    },
    // template 默认会去找 public/activity.html 页面，如果找不到会使用 public/index.html 文件
    // 输出文件会默认的推断为 activity.html
    activity: 'src/activity/main'
  },
  css: {
    loaderOptions: {
      postcss: {
        // 这是rem适配的配置  注意： remUnit在这里要根据lib-flexible的规则来配制，如果您的设计稿是750px的，用75就刚刚好。
        plugins: [
          require('postcss-px2rem')({
            remUnit: 75
          })
        ]
      }
    }
  }
}
