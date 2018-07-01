const theme = require('./web/theme')
require('./scripts/fix/index')

module.exports = {
  entry: 'ts/index.tsx',
  alias: {
    'react-native': 'react-native-web'
  },
  extraBabelPlugins: [
    '@babel/transform-flow-strip-types',
    'react-native-web'
  ],
  extraBabelPresets: [
    '@babel/preset-env',
    '@babel/preset-flow',
  ],
  extraBabelIncludes: [
    'node_modules/react-navigation',
    'node_modules/react-navigation-tabs',
    'node_modules/react-native-safe-area-view',
  ],
  theme,
  disableDynamicImport: true,
  hash: true,
  html: {
    template: 'web/index.ejs',
  },
}
