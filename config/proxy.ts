/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-07-05 10:45:55
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2021-07-23 16:38:20
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
    // 用户端接口
    '/api1': {
      target: 'http://47.110.156.20:8085/',
      // target: 'http://jp-tyo-ilj-1.natfrp.cloud:38298/',
      changeOrigin: true,
      pathRewrite: { '^/api1': '' },
    },
    // 商家版接口
    '/api2': {
      target: 'http://47.110.156.20:8083/',
      // target: 'http://jp-tyo-ilj-1.natfrp.cloud:58379',
      // target: 'http://localhost:8083/',
      // target: 'http://jp-tyo-ilj-1.natfrp.cloud:36082',
      changeOrigin: true,
      pathRewrite: { '^/api2': '' },
    },
    // 上传接口
    '/api3/api': {
      target: 'http://47.110.156.20:10001/',
      // target: 'http://localhost:8081/',
      changeOrigin: true,
      pathRewrite: { '^/api3': '' },
    },
    '/api4': {
      target: 'https://www.fastmock.site/mock/f2f3a8f80b2f20a819f4802a5b9d1550/bao/',
      changeOrigin: true,
      pathRewrite: {'^/api4': ''}
    },
    '/api5': {
      target: 'http://rap2api.taobao.org/app/mock/287560/',
      // target: 'http://localhost:8081/',
      changeOrigin: true,
      pathRewrite: { '^/api5': '' },
    }
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
