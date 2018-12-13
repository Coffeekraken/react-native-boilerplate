import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { View, Text, StyleSheet } from 'react-native'

import messages from './messages'
import { incrementCounter, decrementCounter } from './actions'

import Button from '../../components/Button'

import reducer from './reducer'
import registerReducer from '../../registerReducer'
import theme from '../../theme'

// register the reducer
registerReducer('counter', reducer)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    color: theme.colors.secondary,
    fontSize: 90,
    padding: 20
  },
  button: {
    marginBottom: theme.spaces.default
  }
})

class Counter extends React.PureComponent {
  increment() {
    const { increment } = this.props
    increment()
  }

  decrement() {
    const { decrement } = this.props
    decrement()
  }

  render() {
    const { count, intl } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{count}</Text>
        <Button
          style={styles.button}
          onPress={() => this.decrement()}
          title={intl.formatMessage(messages.decrement)}
        />
        <Button
          onPress={() => this.increment()}
          title={intl.formatMessage(messages.increment)}
        />
      </View>
    )
  }
}

Counter.defaultProps = {
  increment: null,
  decrement: null,
  count: 0,
  intl: null
}

Counter.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  count: PropTypes.number,
  intl: PropTypes.object
}

const mapStateToProps = state => ({
  count: state.counter.count
})
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter())
})

export default injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Counter)
)
