import produce from 'immer'

import { CHANGE_LOCALE } from './constants'
import { locale, locales } from '../../i18n'

const initialState = {
  locale,
  locales
}

export default produce((draft = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      draft.locale = action.locale
      return draft
    default:
      return draft
  }
})
