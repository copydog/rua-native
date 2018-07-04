// Customized Theme File
// 自定义主题文件
const theme = require('./web/theme')

// RoadHog only works with website, react native app
// should use '.babelrc' to configure
// -----
// RoadHog只管理网页,
// 需使用'.babelrc'去配置React Native的代码转换
module.exports = {
  entry: 'ts/index.tsx',
  define: {
    __DEV__: process.env.NODE_DEV,
  },
  alias: {
    'react-native$': 'react-native-web',
    'antd-mobile-rn': 'antd-mobile',
  },
  extraBabelPlugins: [
    '@babel/transform-flow-strip-types',
    'react-native-web',
    ['import', { 'libraryName': 'antd-mobile', 'style': true }],
  ],
  extraBabelPresets: [
    '@babel/preset-env',
    '@babel/preset-flow',
    'react-native',
  ],
  extraBabelIncludes: [
    'node_modules/dva',
    'node_modules/react-navigation',
    'node_modules/react-navigation-tabs',
    'node_modules/react-native-safe-area-view',
    'node_modules/react-native-vector-icons',
  ],
  publicPath: '/',
  theme,
  disableDynamicImport: true,
  hash: true,
  html: {
    template: 'web/index.ejs',
  },
  proxy: {
    '/mock': {
      target: 'http://192.168.0.107:18010/',
      changeOrigin: true,
      pathRewrite: { '^/mock': '' },
    },
  },
}
