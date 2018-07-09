import * as React from 'react'
import { BackHandler } from 'react-native'
import {
  createBottomTabNavigator,
  createStackNavigator,
  NavigationActions,
} from 'react-navigation'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers'
import { connect } from 'rua'
import * as R from './resources'
import { screens } from './configs'

const HomeNavigator = createBottomTabNavigator(
  screens.home,
  {
    swipeEnabled: false,
    animationEnabled: false,
    // lazyLoad: true,
    tabBarOptions: {
      activeTintColor: R.color.primary,
      inactiveBackgroundColor: '#fff',
      activeBackgroundColor: '#fff',
      tabStyle: {
        height: 55,
        marginTop: -5,
        borderTopColor: '#f6f6f6',
        borderTopWidth: 1,
      },
    },
    initialRouteName: 'Home',
  },
)

// BottomTabNavigator walkarround
// 临时修复BottomTabNavigator
HomeNavigator.navigationOptions = ({ navigation }) =>
{
  const { routeName } = navigation.state.routes[ navigation.state.index ]

  return {
    headerTitle: routeName,
  }
}

const MainNavigator = createStackNavigator(
  {
    HomeNavigator: { screen: HomeNavigator },
    ...screens.main,
  },
  {
    headerMode: 'float',
  },
)

const AppNavigator = createStackNavigator(
  {
    MainNavigator: { screen: MainNavigator },
    ...screens.app,
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    // transitionConfig: () => ({
    //   transitionSpec: {
    //     duration: 300,
    //     easing: Easing.out(Easing.poly(4)),
    //     timing: Animated.timing,
    //   },
    //   screenInterpolator: sceneProps => {
    //     const { layout, position, scene } = sceneProps
    //     const { index } = scene
    //
    //     const height = layout.initHeight
    //     const translateY = position.interpolate({
    //       inputRange: [index - 1, index, index + 1],
    //       outputRange: [height, 0, 0],
    //     })
    //
    //     const opacity = position.interpolate({
    //       inputRange: [index - 1, index - 0.99, index],
    //       outputRange: [0, 1, 1],
    //     })
    //
    //     return { opacity, transform: [{ translateY }] }
    //   },
    // }),
  },
)

// Get router state for 'router' model
// 获得'router'模型所需要的state
export const routerReducer = createNavigationReducer(AppNavigator)

export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  (state: any) => state.router,
)

const App = reduxifyNavigator(AppNavigator, 'root')

function getActiveRouteName(navigationState)
{
  if (!navigationState)
  {
    return null
  }
  const route = navigationState.routes[ navigationState.index ]
  if (route.routes)
  {
    return getActiveRouteName(route)
  }
  return route.routeName
}

// 终极路由
@connect(({ app, router }) => ({ app, router }))
class Router extends React.PureComponent<any, never>
{
  componentWillMount()
  {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentWillUnmount()
  {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () =>
  {
    const currentScreen = getActiveRouteName(this.props.router)
    if (currentScreen === 'Login')
    {
      return true
    }
    if (currentScreen !== 'Home')
    {
      this.props.dispatch(NavigationActions.back())
      return true
    }
    return false
  }

  render()
  {
    const { app, dispatch, router } = this.props
    // if (app.loading) return <Loading />

    return <App dispatch={dispatch} state={router}/>
  }
}

// Decorator will cost more performance, use higher-order function here instead
// 装饰器会有更高的性能损耗，于是在这里直接使用高阶段函数
// export default connect(({ app, router }) => ({ app, router }))(Router)
export default Router
