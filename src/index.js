// some polyfills
import 'intl'

import React from 'react'
import { Provider } from 'react-redux'

import store from './store'

import Bootstrap from './bootstrap'

// render the app
export default () => (
  <Provider store={store}>
    <Bootstrap />
  </Provider>
)
