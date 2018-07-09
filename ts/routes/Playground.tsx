import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Repeat } from 'rua-ui'

export default class Playground extends React.Component<any, any>
{
  static navigationOptions = {
    headerTitle: '',
  }

  render()
  {
    return (
      <View>
        <Repeat count={3}>
          <Text>
            hello
          </Text>
        </Repeat>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  outer: {
    fontSize: 20,
  },
  inner: {
    color: 'red',
  },
})
