import * as React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

class Home extends React.Component<any, any>
{
  static navigationOptions = {
    // ...R.style.header,
    headerTitle: 'Home',
  }

  render()
  {
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }} showsHorizontalScrollIndicator={false}>
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
