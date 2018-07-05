import * as React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { default as Icon } from 'react-native-vector-icons/MaterialCommunityIcons'
import { default as R } from '../resources'

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
        <Icon name={'react'} size={22} color={focused ? tintColor : '#333'} />
      )
    }
  }

  render()
  {
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: 'red' }}>
            <Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text>
            <Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text>
            <Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text>
            <Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text>
            <Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text>
            <Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text>
            <Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text>
            <Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text><Text>Home</Text>
          </View>
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
