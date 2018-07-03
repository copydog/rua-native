import * as React from 'react'
import * as ReactDom from 'react-dom'
import './rua-native/loader'
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'

import { Home, Manual, Icons } from './routes'
import { SimplePageExample } from './routes/Example'

const Main = createBottomTabNavigator({
  Home: { screen: Home, path: '/' },
  Manual: { screen: Manual, path: '/manual' },
  Icon: { screen: Icons, path: '/icon' },
})

Main.navigationOptions = ({ navigation }) =>
{
  const component = Main.router.getComponentForState(navigation.state)
  if (typeof component.navigationOptions === 'function')
  {
    return component.navigationOptions({ navigation })
  }
  return component.navigationOptions
}

const App = createStackNavigator({
  MainNavigator: { screen: Main },
  SimplePageExample: { screen: SimplePageExample, path: '/manual/simplePage' }
})

ReactDom.render(
  <App uriPrefix={'http://localhost:8000/'} />,
  document.getElementById('RuaNative')
)
