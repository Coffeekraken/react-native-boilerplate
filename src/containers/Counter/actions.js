import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './constants'

export const incrementCounter = (increment = 1) => ({
  type: INCREMENT_COUNTER,
  increment
})

export const decrementCounter = (decrement = 1) => ({
  type: DECREMENT_COUNTER,
  decrement
})
