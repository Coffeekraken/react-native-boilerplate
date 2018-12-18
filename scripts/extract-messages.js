// compile required files
require('@babel/register')({
  presets: ['@babel/preset-env']
})

// import some libraries
const path = require('path')
const fs = require('fs')
const glob = require('glob-all')
const sortObject = require('sort-object-keys')
const chalk = require('chalk')

// i18n
const i18n = require('../src/i18n')
const locales = i18n.locales
const DEFAULT_LOCALE = i18n.DEFAULT_LOCALE

// search for "messages.js" files
const files = glob.sync(['src/**/messages.js'])

// store translations
const translations = {}

// loop on each files found
files.forEach(file => {
  const messages = require(`../${file}`).default

  // loop on each locales
  locales.forEach(locale => {
    // load the locale translations messages
    if (!translations[locale]) {
      // try to load existing locale file
      const translationsPath = `src/translations/${locale}.json`
      if (fs.existsSync(translationsPath)) {
        translations[locale] = require(path.resolve(translationsPath))
      } else {
        translations[locale] = {}
      }
    }

    // loop on each messages from the code
    for (key in messages) {
      const trans = messages[key]
      const transId = trans.id
      const transDefaultMessage = trans.defaultMessage
      if (!translations[locale][transId]) {
        if (locale === DEFAULT_LOCALE) {
          translations[locale][transId] = transDefaultMessage
        } else {
          translations[locale][transId] = ''
        }
      }
    }
  })
})

console.log(chalk.green('The messages have been extracted correctly!'))
for (locale in translations) {
  translations[locale] = sortObject(translations[locale])
  // save file
  fs.writeFileSync(
    `src/translations/${locale}.json`,
    JSON.stringify(translations[locale], null, 2)
  )
  console.log(`- src/translations/${locale}.json`)
}
