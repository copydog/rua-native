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
    return (
      <View>
        <List>
          <ListItem arrow={'horizontal'} onClick={this.handleGoTo('SimplePageExample')}>
            123
          </ListItem>
        </List>
      </View>
    )
  }
}

export default Manual
