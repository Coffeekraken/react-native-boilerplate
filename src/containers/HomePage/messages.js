import { defineMessages } from 'react-intl'

// scope
export const scope = 'homepage'

// messages
export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Coffeekraken React Native Boilerplate'
  },
  body: {
    id: `${scope}.body`,
    defaultMessage:
      'React Native boilerplate integrated with expo, redux, redux-thunk, reselect and more...'
  }
})
