import * as React from 'react'
import * as ReactDom from 'react-dom'
import { createBottomTabNavigator } from 'react-navigation'
import * as a from 'react-navigation';
console.log(a)

import { Home, Manual } from './routes'

const App = createBottomTabNavigator({
  Home: { screen: Home },
  Manual: { screen: Manual },
})

ReactDom.render(
  <App />,
  document.getElementById('RuaNative')
)
