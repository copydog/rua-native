import * as React from 'react'
import { View, Text } from 'react-native'
import { default as R } from '../../resources'

export default class SimpleModalPageExample extends React.PureComponent<any, any>
{
  static navigationOptions = {
    ...R.style.header,
    headerTitle: 'Simple Modal Page',
  }

  render()
  {
    return (
        <View>
          <Text>123</Text>
        </View>
    )
  }
}
