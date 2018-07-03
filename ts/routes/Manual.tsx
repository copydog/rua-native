import * as React from 'react'
import { View } from 'react-native'
import { default as Icon } from 'react-native-vector-icons/MaterialCommunityIcons'
import { default as R } from '../resources'

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

  render()
  {
    return (
      <View>

      </View>
    )
  }
}

export default Manual
