const fs = require('fs')
const path = require('path')
const klawSync = require('klaw-sync')
const babelGen = require('@babel/generator').default

const folders = [
  'react-navigation-redux-helpers',
  'react-navigation-redux-helpers',
  'react-native-modal',
  'react-native-animatable',
  'react-navigation-tabs',
  'react-navigation',
  'react-native-touchable-scale',
  // 'react-native-invertible-scroll-view',
  // 'react-native-scrollable-mixin',
  // '@expo',
  // 'react-native-safe-area-view',
  // 'react-native-lightbox',,
  'react-native-tab-view',
  'react-navigation-tabs',
  'react-native-elements',
  'react-native-platform-touchable',
]

for (const folder of folders) {
  const folderPath = path.resolve(
    require.resolve('rua'),
    '../../..',
    folder,
  )

  const paths = klawSync(folderPath, {
    noDir: true,
  })

  for(const _path of paths)
  {
    if (_path.path.endsWith('.js'))
    {
      console.log(`fixing: ${_path.path}`)

      const file = fs.readFileSync(_path.path)

      const parsed = require("babel-core").transform(file, {
        presets: ['es2015', 'stage-2'],
        plugins: [
          'transform-runtime',
          'transform-react-jsx',
          "transform-flow-strip-types",
        ],
      });

      const newCode = babelGen(parsed.ast, {}, '').code

      fs.writeFileSync(_path.path, newCode)
    }
  }
}
