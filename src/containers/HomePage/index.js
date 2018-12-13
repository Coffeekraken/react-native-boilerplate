import React from 'react'
import { injectIntl } from 'react-intl'

import { View, Image, StyleSheet } from 'react-native'
import { Video } from 'expo'
import Button from '../../components/Button'
import P from '../../components/P'

import messages from './messages'

import backgroundVideo from '../../assets/disaster.mp4'
import coffeekrakenLogo from '../../assets/coffeekraken-logo.png'
import theme from '../../theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.secondary
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  header: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingLeft: theme.spaces.medium,
    paddingRight: theme.spaces.medium
  },
  image: {
    height: 50,
    marginBottom: theme.spaces.default
  },
  buttons: {
    paddingLeft: theme.spaces.big,
    paddingRight: theme.spaces.big,
    flex: 1,
    justifyContent: 'flex-start'
  }
})

export default injectIntl(({navigation, intl}) => (
  <View style={styles.container}>
    <Video source={backgroundVideo} style={styles.backgroundVideo} resizeMode="cover" shouldPlay isMuted isLooping />
    <View style={styles.header}>
      <Image source={coffeekrakenLogo} resizeMode="contain" style={styles.image} />
      <P content={intl.formatMessage(messages.body)} style={{marginBottom: theme.spaces.default, textAlign: 'center'}} />
    </View>
    <View style={styles.buttons}>
      <Button onPress={() => navigation.navigate('CounterPage')} title="Counter" style={{ marginBottom: theme.spaces.default }} />
      <Button onPress={() => navigation.navigate('TodoPage')} title="Todo" />
    </View>
  </View>
))
