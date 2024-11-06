import i18next from 'i18next'
import XHR from "i18next-http-backend"
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from './en.json'
import fr from './fr.json'

i18next.use(XHR).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'en',
  detection: {
    order: ['querystring', 'navigator'],
    lookupQuerystring: 'lng',
  },
  debug: false,
  resources: {
    en,
    fr,
  },
})
