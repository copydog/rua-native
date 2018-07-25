import * as React from 'react'
import { StyleSheet, View, Image, Button, Text } from 'react-native'
import { actions, D } from 'rua'
import * as R from '../../resources/index'
import { Center } from '../../components/rua'

class SimplePageExample extends React.Component<any, any>
{
  static navigationOptions = {
    ...R.style.header,
    headerTitle: 'Simple Page',
  }

  render()
  {
    return (
      <Center>
        <Text>
          This is a simple page
        </Text>
        <Text>
          这是一个简单页面
        </Text>
      </Center>
    )
  }
}

export default SimplePageExample
