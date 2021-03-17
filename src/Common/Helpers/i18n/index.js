import React from 'react'
import ReactMarkdown from 'react-markdown'
import { template } from 'lodash'

// https://www.i18next.com/translation-function/plurals
import translations from './translations.json'

export const KEY_USER_LANGUAGE = '@maxime-farrugia/user-locale'

const availableLanguages = ['fr', 'en']
export const langs = [
  { lang: 'English', code: 'en', flag: 'gb' },
  { lang: 'Francais', code: 'fr', flag: 'fr' },
  // { lang: 'Svenska', code: 'sv', flag: 'se' },
]

const getUserLanguage = () => {
  const navigatorLanguage = navigator.language.slice(0, 2)
  return availableLanguages.includes(navigatorLanguage)
    ? navigatorLanguage
    : 'en'
}

export const getLocale = () => {
  let locale = localStorage.getItem(KEY_USER_LANGUAGE)
  if (!locale || !availableLanguages.includes(locale)) {
    locale = getUserLanguage()
    localStorage.setItem(KEY_USER_LANGUAGE, locale)
  }
  return locale
}

export const setLocale = (locale, reload = false) => {
  const currentLocale = getLocale()
  if (locale !== currentLocale && availableLanguages.includes(locale)) {
    localStorage.setItem(KEY_USER_LANGUAGE, locale)
    if (reload) {
      window.location.reload()
    }
  }
}

export const getStage = () => {
  const host = window.location.host.replace('localhost', 'dev')
  const [stage] = host.match(/(dev|staging)/) || []
  return stage || 'prod'
}

export const translate = (
  string,
  variables,
  { md = false, plural = false, linkTarget = '_blank' } = {},
) => {
  const language = getLocale()
  const number = plural ? 'other' : 'singular'

  let translation = translations.find(
    t =>
      t.fr.other === string ||
      t.fr.singular === string ||
      t.en.other === string ||
      t.en.singular === string,
  )

  if (['dev'].includes(getStage()) && !translation) {
    console.warn('Missing translation: %s', string)
  }

  translation = translation ? translation[language][number] : string

  const compiled = template(translation)(variables)
  return md ? (
    <ReactMarkdown
      source={compiled}
      escapeHtml={false}
      linkTarget={linkTarget}
    />
  ) : (
    compiled
  )
}
