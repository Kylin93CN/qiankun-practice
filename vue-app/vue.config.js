const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package');


module.exports = defineConfig({
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  transpileDependencies: true,
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
    },
  },
})
