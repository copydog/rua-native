import * as React from 'react'
import {View, ViewStyle} from 'react-native'

export default class Column extends React.PureComponent<ColumnProps, any>
{
  render()
  {
    const {
      center,
      middle,
      children,
      style,
      ...restProps
    } = this.props
    const viewStyle: ViewStyle = style || {}

    if (center)
    {
      viewStyle.alignItems = 'center'
    }

    if (middle)
    {
      viewStyle.justifyContent = 'center'
    }

    return (
      <View
        style={viewStyle}
        {...restProps}
      >
        {children}
      </View>
    )
  }
}

interface ColumnProps
{
  center?: boolean
  middle?: boolean
  style?: ViewStyle
}
