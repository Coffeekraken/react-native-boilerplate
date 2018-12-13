import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  p: {
    color: '#ffffff',
    fontSize: 18
  }
})

export default class P extends React.PureComponent {
  render() {
    const {
      children,
      content,
      style,
      ...others
    } = this.props
    const finalStyle = {
      ...styles.p,
      ...style,
    }
    return (
      <Text {...others} style={finalStyle}>{content}</Text>
    )
  }
}
