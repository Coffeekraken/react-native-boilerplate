// some polyfills
import 'intl'

import React from 'react'
import { Provider } from 'react-redux'

import App from './containers/App'
import LanguageProvider from './containers/LanguageProvider'

import { translationMessages, locale } from './i18n'
import store from './store'

// render the app
export default () => (
  <Provider store={store}>
    <LanguageProvider locale={locale} messages={translationMessages}>
      <App />
    </LanguageProvider>
  </Provider>
)
