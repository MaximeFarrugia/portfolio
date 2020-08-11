import React from 'react'
import { string } from 'prop-types'
import { useTranslation } from 'react-i18next'

import { Flag } from './LangSelect.module.css'

import classNames from '../../Helpers/classNames'
import Select from '../Select'

const langs = [
  { lang: 'English', codes: ['en', 'en-US'], flag: 'gb' },
  { lang: 'Francais', codes: ['fr'], flag: 'fr' },
  // { lang: 'Svenska', codes: ['sv'], flag: 'se' },
]

const LangSelect = ({ className }) => {
  const { i18n } = useTranslation()
  const currentLang = langs.find((lang) =>
    lang.codes.some((l) => i18n.language.split(',').includes(l)),
  ) || langs[0]

  return (
    <Select
      className={classNames([className])}
      value={{
        label: currentLang.lang,
        value: currentLang.codes[0],
        customElement: (
          <span
            className={classNames([
              `flag-icon flag-icon-${currentLang.flag}`,
              Flag,
            ])}
          />
        ),
      }}
      options={langs.map(lang => ({
        label: lang.lang,
        value: lang.codes[0],
        customElement: (
          <span
            className={classNames([
              `flag-icon flag-icon-${lang.flag}`,
              Flag,
            ])}
          />
        ),
      }))}
      onChange={({ value }) => i18n.changeLanguage(value)}
    />
  )
}

LangSelect.propTypes = {
  className: string,
}

LangSelect.defaultProps = {
  className: '',
}

export default LangSelect
