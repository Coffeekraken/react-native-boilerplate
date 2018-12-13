import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'

import reducer from './reducer'
import registerReducer from '../../registerReducer'

// inject the reducer to the app
registerReducer('language', reducer)

class LanguageProvider extends React.PureComponent {
  render() {
    const { locale, messages, children } = this.props
    return (
      <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    )
  }
}

LanguageProvider.defaultProps = {
  locale: 'en',
  messages: {}
}

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired
}

const mapStateToProps = state => ({
  locale: state.language.locale
})

export default connect(mapStateToProps)(LanguageProvider)
