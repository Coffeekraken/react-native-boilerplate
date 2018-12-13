import { CHANGE_LOCALE } from './constants'

export const changeLocale = locale => dispatch => {
  // save the local in local storage
  localStorage.locale = locale
  // dispatch an action
  dispatch({
    type: CHANGE_LOCALE,
    locale
  })
}
