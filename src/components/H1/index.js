import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  h1: {
    color: '#ffffff',
    fontSize: 60
  }
})

export default class H1 extends React.PureComponent {
  render() {
    const {
      children,
      ...others
    } = this.props
    return (
      <Text {...others} style={styles.h1}>{children}</Text>
    )
  }
}
