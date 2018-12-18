import React from 'react'

import { View, StyleSheet } from 'react-native'

import Counter from '../Counter'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  counter: {
    flex: 0
  }
})

export default class CounterPage extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: 'Counter'
  })

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.counter}>
          <Counter />
        </View>
      </View>
    )
  }
}
