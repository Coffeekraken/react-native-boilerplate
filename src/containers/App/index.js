import React from 'react'
import { StatusBar, View, StyleSheet } from 'react-native'
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import HomePage from '../HomePage'
import CounterPage from '../CounterPage'
import TodoPage from '../TodoPage'

import theme from '../../theme'

const TodoStack = createStackNavigator({
  TodoPage
})
const CounterStack = createStackNavigator({
  CounterPage
})
const AppNavigator = createBottomTabNavigator(
  {
    HomePage,
    CounterStack,
    TodoStack
  },
  {
    initialRouteName: 'HomePage',

    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'HomePage') {
          iconName = `ios-information-circle`
        } else if (routeName === 'CounterStack') {
          iconName = `ios-menu`
        } else if (routeName === 'TodoStack') {
          iconName = `ios-checkbox`
        }
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        )
      }
    }),
    tabBarOptions: {
      style: {
        height: 70,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: theme.colors.secondary
      },
      labelStyle: {
        position: 'relative',
        top: -10
      },
      activeTintColor: theme.colors.secondary,
      inactiveTintColor: '#fff',
      activeBackgroundColor: theme.colors.primary,
      inactiveBackgroundColor: theme.colors.secondary
    }
  }
)
const AppContainer = createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  statusBar: {
    height: getStatusBarHeight(),
    backgroundColor: theme.colors.secondary
  }
})

export default () => (
  <View style={{ flex: 1 }}>
    <View style={styles.statusBar} />
    <StatusBar
      backgroundColor={theme.colors.secondary}
      barStyle="light-content"
    />
    <AppContainer />
  </View>
)
