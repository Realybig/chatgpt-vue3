const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // 可以在这里设置全局的less变量
            // 'primary-color': '#1890ff'
          },
          javascriptEnabled: true,
        },
      },
    },
  },
});
