import { defineMessages } from 'react-intl'

// scope
export const scope = 'counter'

// messages
export default defineMessages({
  increment: {
    id: `${scope}.counter.increment`,
    defaultMessage: 'Increment'
  },
  incrementTooltip: {
    id: `${scope}.counter.increment.tooltip`,
    defaultMessage: 'Increment the counter'
  },
  decrement: {
    id: `${scope}.counter.decrement`,
    defaultMessage: 'Decrement'
  },
  decrementTooltip: {
    id: `${scope}.counter.decrement.tooltip`,
    defaultMessage: 'Decrement the counter'
  }
})
