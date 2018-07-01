const theme = require('./web/theme')

module.exports = {
  entry: 'index.js',
  alias: {
    'react-native': 'react-native-web'
  },
  extraBabelPlugins: [],
  extraBabelIncludes: [],
  theme,
  disableDynamicImport: true,
  hash: true,
  html: {
    template: './web/index.ejs',
  },
}
