import * as React from 'react'
import { View, Text, Column, Row, TextView } from 'rua-ui'
import * as R from '../../resources/index'
import Toast from 'react-native-root-toast'

export default class ReactNativeRootToastExample extends React.PureComponent<any, any>
{
  static navigationOptions = {
    ...R.style.header,
    headerTitle: 'RN Root Toast',
  }

  handleShowBasicToast()
  {
    Toast.show('1')
  }

  render()
  {
    return (
      <Column>
        <View onPress={this.handleShowBasicToast}>
          <Text>
            默认Toast
          </Text>
        </View>
      </Column>
    )
  }
}
