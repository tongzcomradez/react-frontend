/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl'
import enLocaleData from 'react-intl/locale-data/en'
import thLocaleData from 'react-intl/locale-data/th'

import { DEFAULT_LOCALE } from 'containers/App/constants' // eslint-disable-line
import enTranslationMessages from './translations/en.json'
import thTranslationMessages from './translations/th.json'

addLocaleData(enLocaleData)
addLocaleData(thLocaleData)

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages) : {}
  const formattedMessages = {}
  const messageKeys = Object.keys(messages)
  messageKeys.forEach((messageKey) => {
    if (locale === DEFAULT_LOCALE) {
      formattedMessages[messageKey] = messages[messageKey]
    } else {
      formattedMessages[messageKey] = messages[messageKey] || defaultFormattedMessages[messageKey]
    }
  })

  return formattedMessages
}

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  th: formatTranslationMessages('th', thTranslationMessages),
}
