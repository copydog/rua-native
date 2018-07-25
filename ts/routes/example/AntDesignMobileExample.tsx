import * as React from 'react'
import { View } from 'react-native'
import * as R from '../../resources/index'
import { default as Icon } from 'react-native-vector-icons/MaterialCommunityIcons'

export default class AntDesignMobileExample extends React.PureComponent<any, any>
{
  static navigationOptions = {
    ...R.style.header,
    headerTitle: 'AntDesignMobileExample',
    tabBarIcon({ focused, tintColor })
    {
      return (
        <Icon name={'library-books'} size={22} color={focused ? tintColor : '#333'} />
      )
    }
  }

  render()
  {
    return (
      <View/>
    )
  }
}
