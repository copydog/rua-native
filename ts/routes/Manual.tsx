import * as React from 'react'
import { View } from 'react-native'
import { List } from 'antd-mobile-rn'
import { actions } from 'rua'
import { default as Icon } from 'react-native-vector-icons/MaterialCommunityIcons'
import { default as R } from '../resources'

const { Item: ListItem } = List

class Manual extends React.Component<any, any>
{
  static navigationOptions = {
    ...R.style.header,
    headerTitle: 'Manual',
    tabBarIcon({ focused, tintColor })
    {
      return (
        <Icon name={'library-books'} size={22} color={focused ? tintColor : '#333'} />
      )
    }
  }

  handleGoTo(route)
  {
    return () => actions.go.to(route)
  }

  render()
  {
    const goTo = this.handleGoTo

    return (
      <View>
        <List renderHeader={'Navigation / 路由'}>
          <ListItem arrow={'horizontal'} onClick={goTo('SimplePageExample')}
          >
            Simple Page / 简单页面
          </ListItem>
          <ListItem arrow={'horizontal'} onClick={goTo('SimpleModalPageExample')}>
            Simple Modal Page / 简单弹窗页面
          </ListItem>
        </List>
        <List renderHeader={'Rua.js'}>
          <ListItem arrow={'horizontal'} onClick={goTo('RuaJSExample')}>Rua.js</ListItem>
          <ListItem arrow={'horizontal'} onClick={goTo('RuaUIExample')}>Rua UI</ListItem>
        </List>
        <List renderHeader={'Third-party libraries / 第三方库'}>
          <ListItem arrow={'horizontal'} onClick={goTo('AntDesignMobileExample')}>Ant Design Mobile</ListItem>
          <ListItem arrow={'horizontal'} onClick={goTo('ReactNativeModalExample')}>React Native Modal</ListItem>
        </List>
      </View>
    )
  }
}

export default Manual
