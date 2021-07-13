/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-05 10:45:55
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-13 16:51:30
 */
/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/api/': {
      target: 'http://47.110.156.20:8085/',
      // target: 'http://localhost:8081/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
    '/api2': {
      target: 'http://47.110.156.20:8083/',
      // target: 'http://localhost:8081/',
      changeOrigin: true,
      pathRewrite: { '^/api2': '' },
    },
    '/api3/api': {
      target: 'http://47.110.156.20:10001/',
      // target: 'http://localhost:8081/',
      changeOrigin: true,
      pathRewrite: { '^/api3': '' },
    },
  },
  test: {
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
