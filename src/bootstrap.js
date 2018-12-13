// some libraries
import React from 'react'

import App from './containers/App'

import LanguageProvider from './containers/LanguageProvider'
import { translationMessages, locale } from './i18n'

const Bootstrap = () => (
  <LanguageProvider locale={locale} messages={translationMessages}>
    <App />
  </LanguageProvider>
)

export default Bootstrap
