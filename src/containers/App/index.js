import React from 'react'
import { StatusBar, View, StyleSheet } from 'react-native'
import {
  createAppContainer,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { getStatusBarHeight } from 'react-native-status-bar-height'

import HomePage from '../HomePage'
import CounterPage from '../CounterPage'
import TodoPage from '../TodoPage'

import theme from '../../theme'

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: theme.colors.secondary
  },
  headerTitleStyle: {
    color: '#fff'
  }
}

const TodoStack = createStackNavigator(
  {
    TodoPage: {
      screen: TodoPage
    }
  },
  {
    defaultNavigationOptions
  }
)
const CounterStack = createStackNavigator(
  {
    CounterPage
  },
  {
    defaultNavigationOptions
  }
)
const AppNavigator = createMaterialTopTabNavigator(
  {
    HomePage,
    CounterStack,
    TodoStack
  },
  {
    initialRouteName: 'HomePage',
    tabBarPosition: 'bottom',
    lazy: true,
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
        height: 100,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: theme.colors.secondary
      },
      indicatorStyle: {
        top: 0,
        backgroundColor: theme.colors.primary
      },
      showIcon: true,
      activeTintColor: theme.colors.primary,
      inactiveTintColor: '#fff'
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
