import * as React from 'react'
import {View, ViewProps, ViewStyle} from 'react-native'

export default class Row extends React.PureComponent<RowProps, never>
{
  render()
  {
    const { center, middle, style, children, ...restProps } = this.props
    const viewStyle: ViewStyle = style || {}

    viewStyle.flexDirection = 'row'

    if (center)
    {
      viewStyle.justifyContent = 'center'
    }

    if (middle)
    {
      viewStyle.alignContent = 'center'
    }

    return (
      <View style={viewStyle} {...restProps}>
        {children}
      </View>
    )
  }
}

interface RowProps extends ViewProps
{
  center?: boolean
  middle?: boolean
  style?: ViewStyle
}
