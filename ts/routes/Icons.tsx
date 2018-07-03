import { List } from 'antd-mobile'
import * as React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Icon as RIcon } from 'rua-ui'
import { default as R } from '../resources'
import { MaterialCommunityIcons } from '../rua-native/icon-list'

const { Item: ListItem } = List

const iconDict: any = {
  'material': MaterialCommunityIcons,
}

const iconDictLen: any = {
  'material': MaterialCommunityIcons.length,
}

class Icons extends React.Component<any, any>
{
  static navigationOptions = {
    ...R.style.header,
    headerTitle: 'Icons',
    tabBarLabel: 'Icons',
    tabBarIcon({ focused, tintColor })
    {
      return (
        <RIcon name={'label'} size={22} color={focused ? tintColor : '#333'} />
      )
    }
  }

  state = {
    currentPage: 1,
    per_page: 30,
    font: 'material'
  }

  get data(): JSX.Element[]
  {
    const { font, currentPage, per_page } = this.state
    return iconDict[font].slice(0, per_page * currentPage)
  }

  keyExtractor(item: Object): string
  {
    return item as string
  }

  renderItem({ item }): JSX.Element
  {
    return (
      <ListItem thumb={
        <RIcon name={item} size={22} />
      } key={item}>
        {item}
      </ListItem>
    )
  }

  handleEndReached = () =>
  {
    const { currentPage, per_page, font } = this.state

    const len = iconDictLen[font]

    if (currentPage * per_page > len)
    {
      return
    }

    this.setState((state: any) =>
    {
      state.currentPage += 1
      return state
    })
  }

  render(): JSX.Element
  {
    return (
      <View style={styles.f1}>
        <View>
          <Text>123</Text>
        </View>
        <FlatList
          style={styles.f1}
          data={this.data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          onEndReached={this.handleEndReached}
          onEndReachedThreshold={1.5}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  f1: {
    flex: 1,
  }
})

export default Icons
