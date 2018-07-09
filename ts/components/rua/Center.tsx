import * as React from 'react'
import { View, ViewStyle } from 'react-native'

export default class Center extends React.PureComponent<CenterProps, any>
{
  render()
  {
    const { children } = this.props

    const viewStyle: ViewStyle = {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }

    return (
      <View style={viewStyle}>
        {children}
      </View>
    )
  }
}

interface CenterProps
{

}
