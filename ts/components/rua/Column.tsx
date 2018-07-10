import * as React from 'react'
import { View, ViewStyle } from 'react-native'

export default class Column extends React.PureComponent<ColumnProps, any>
{
  render()
  {
    const {
      center,
      middle,
      children,
      style,
      left,
      right,
      top,
      bottom,
      between,
      around,
      ...restProps
    } = this.props
    const viewStyle: ViewStyle = style || {}

    if (left)
    {
      viewStyle.alignItems = 'flex-start'
    }

    if (center)
    {
      viewStyle.alignItems = 'center'
    }

    if (right)
    {
      viewStyle.alignItems = 'flex-end'
    }

    if (top)
    {
      viewStyle.justifyContent = 'flex-start'
    }

    if (middle)
    {
      viewStyle.justifyContent = 'center'
    }

    if (bottom)
    {
      viewStyle.justifyContent = 'flex-end'
    }

    if (between)
    {
      viewStyle.justifyContent = 'space-between'
    }

    if (around)
    {
      viewStyle.justifyContent = 'space-around'
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
  left?: boolean
  right?: boolean
  top?: boolean
  bottom?: boolean
  between?: boolean
  around?: boolean
  style?: ViewStyle
}
