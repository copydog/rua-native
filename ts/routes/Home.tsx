import * as React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { default as Icon } from 'react-native-vector-icons/MaterialCommunityIcons'
import { default as R } from '../resources'
import { Column, Row } from '../components/rua'

class Home extends React.Component<any, any>
{
  static navigationOptions = {
    ...R.style.header,
    headerTitle: 'Rua.JS',
    tabBarLabel: 'Home',
    tabBarIcon(nav: any)
    {
      const { focused, tintColor } = nav
      return (
        <Icon name={'react'} size={22} color={focused ? tintColor : '#333'}/>
      )
    },
  }

  render()
  {
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <Row center>
            <Text>Hello</Text>
          </Row>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Home
