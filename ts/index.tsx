import * as React from 'react'
import * as ReactDom from 'react-dom'
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'

import { Home, Manual } from './routes'
import { SimplePageExample } from './routes/Example'

const Main = createBottomTabNavigator({
  Home: { screen: Home, path: '/' },
  Manual: { screen: Manual, path: '/manual' },
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
  <App />,
  document.getElementById('RuaNative')
)
