import * as React from 'react'
import { View } from 'react-native'
import ActionButton from 'react-native-action-button'

export default class ReactNativeActionButtonExample extends React.PureComponent<any, any>
{
  render()
  {
    return (
      <View style={{ flex: 1, height: '100%' }}>
        <ActionButton />
      </View>
    )
  }
}
