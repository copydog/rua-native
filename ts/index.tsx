import './rua-native/loader'
// Basic
import * as React from 'react'
import { AppRegistry, YellowBox, Platform } from 'react-native'
// Configs
import ruaNativeModels from './rua-native/models'
import models from './models'
import Router, { routerMiddleware, routerReducer } from './router'
// Rua.JS
import { Rua } from 'rua'

// todo: move
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTJMessageModule requires main',
  'Module RCTWeChat requires main',
  'Module RCTImageLoader requires main',
])

// 配置Rua
const app = new Rua({
  dva: {
    initialState: {},
    models: [...ruaNativeModels, ...models],
    extraReducers: { router: routerReducer },
    onAction: [routerMiddleware],
    onError(e: any)
    {
      console.warn('onError', e)
    },
  },
}).app

// 启动
const App = app.start(<Router />)

AppRegistry.registerComponent('RuaNative', () => App)

if ('web' === Platform.OS)
{
  // todo: web registration
  AppRegistry.runApplication('RuaNative', {
    rootTag: document.getElementById('RuaNative')
  })
}
