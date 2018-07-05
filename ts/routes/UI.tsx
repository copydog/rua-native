import * as React from 'react'
import { List } from 'antd-mobile-rn'
import { StyleSheet, View, Image, Button, Text } from 'react-native'

const { Item: ListItem } = List

export default class UI extends React.Component<any, any>
{
  static navigationOptions = {
    headerTitle: 'UI',
    tabBarLabel: 'UI',
  }

  render()
  {
    return (
      <View>
        <List renderHeader={'Helpers'}>
          <ListItem arrow={'horizontal'}>Repeat</ListItem>
          <ListItem arrow={'horizontal'}>Placeholder</ListItem>
        </List>
      </View>
    )
  }
}
