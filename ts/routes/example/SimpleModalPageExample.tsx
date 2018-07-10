import * as React from 'react'
import { View, Text } from 'react-native'
import { default as R } from '../../resources'
import { Center } from '../../components/rua'

export default class SimpleModalPageExample extends React.PureComponent<any, any>
{
  static navigationOptions = {
    ...R.style.header,
    headerTitle: 'Simple Modal Page',
  }

  render()
  {
    return (
        <Center>
          <Text>Simple Modal Page</Text>
          <Text>简单弹窗页面</Text>
        </Center>
    )
  }
}
