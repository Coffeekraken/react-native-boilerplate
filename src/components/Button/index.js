import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import theme from '../../theme'

const styles = StyleSheet.create({
  button: {
    paddingTop: theme.lookAndFeel.paddingHorizontal,
    paddingBottom: theme.lookAndFeel.paddingHorizontal,
    paddingLeft: theme.lookAndFeel.paddingVertical,
    paddingRight: theme.lookAndFeel.paddingVertical,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.lookAndFeel.borderRadius,
    flex: 0
  },
  text: {
    color: '#fff',
    textAlign: 'center'
  }
})

export default class Button extends React.PureComponent {
  render() {
    const {
      style,
      title,
      ...others
    } = this.props
    const finalStyle = {
      ...styles.button,
      ...style
    }
    return (
      <TouchableOpacity {...others} style={finalStyle}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    )
  }
}
