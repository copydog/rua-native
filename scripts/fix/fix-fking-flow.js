const fs = require('fs')
const path = require('path')
const klawSync = require('klaw-sync')
const babel = require('@babel/core')
const babelGen = require('@babel/generator').default

const folders = [
  'react-native-tab-view',
  'react-navigation-tabs',
  // 'react-navigation-redux-helpers',
  // 'react-navigation-tabs',
  // 'react-navigation',
  // 'react-native-invertible-scroll-view',
  // 'react-native-scrollable-mixin',
  // '@expo',
  // 'react-native-safe-area-view',
  // 'react-native-lightbox',
]

for (const folder of folders)
{
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

      const parsed = babel.transform(file, {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-flow',
        ],
        plugins: [
          '@babel/plugin-transform-flow-strip-types',
          'react-native-web',
          'transform-class-properties',
        ],
      })

      const newCode = babelGen(parsed.ast, {}, '').code

      fs.writeFileSync(_path.path, newCode)
    }
  }
}

