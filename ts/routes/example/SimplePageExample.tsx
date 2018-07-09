import * as React from 'react'
import { StyleSheet, View, Image, Button, Text } from 'react-native'
import { actions, D } from 'rua'
import { default as R } from '../../resources'

class SimplePageExample extends React.Component<any, any>
{
  static navigationOptions = {
    ...R.style.header,
    headerTitle: 'Simple Page',
  }

  render()
  {
    return (
      <View>
        <Text>
          This is a simple page / 这是一个简单页面
        </Text>
      </View>
    )
  }
}

export default SimplePageExample
