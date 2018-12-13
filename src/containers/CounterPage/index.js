import React from 'react'

import { View, Image, StyleSheet } from 'react-native'

import Counter from '../Counter'

import counterImage from '../../assets/counter.png'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  header: {
    flex: 0,
    textAlign: 'center',
    alignItems: 'center',
    padding: 20
  },
  image: {
    width: '60%',
    height: 200
  },
  counter: {
    flex: 1
  }
})

export default class CounterPage extends React.PureComponent {

  static navigationOptions = ({navigation}) => ({
    title: 'Counter'
  })

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={counterImage} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.counter}>
          <Counter />
        </View>
      </View>
    )
  }
}
