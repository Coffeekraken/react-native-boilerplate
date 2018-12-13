import { addLocaleData } from 'react-intl'

// import some locales
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'

// import translations
import enTranslationMessages from './translations/en.json'
import frTranslationMessages from './translations/fr.json'

// add some locale data
addLocaleData(en)
addLocaleData(fr)

// default locale
export const DEFAULT_LOCALE = 'en'

// export the locale
let lcl = DEFAULT_LOCALE
if (typeof Storage !== 'undefined') {
  lcl = localStorage.locale
}
export const locale = lcl

// export locales
export const locales = ['en', 'fr']

// export translation messages
export const translationMessages = {
  en: enTranslationMessages,
  fr: frTranslationMessages
}
