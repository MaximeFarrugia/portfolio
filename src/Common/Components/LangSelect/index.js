import React, { useContext, useState } from 'react'
import { string } from 'prop-types'
import { useTranslation } from 'react-i18next'
import Icon from '@material-ui/core/Icon'

import {
  Wrapper,
  Dark,
  Light,
  Arrow,
  Dropdown,
  Flag,
} from './LangSelect.module.css'

import classNames from '../../Helpers/classNames'
import { Context } from '../../../App'

const langs = [
  { lang: 'Francais', code: ['fr'], flag: 'fr' },
  { lang: 'English', code: ['en', 'en-US'], flag: 'gb' },
  // { lang: 'Svenska', code: ['se'], flag: 'se' },
]

const LangSelect = ({ className }) => {
  const [dropdown, setDropdown] = useState(false)
  const { darkTheme } = useContext(Context)
  const { i18n } = useTranslation()
  const currentLang = langs.find((lang) =>
    lang.code.some((l) => i18n.language.split(',').includes(l)),
  )

  return (
    <div
      className={classNames([className, Wrapper, darkTheme ? Dark : Light])}
      onClick={() => setDropdown(!dropdown)}
      role="presentation"
    >
      <span
        className={classNames([
          `flag-icon flag-icon-${currentLang.flag}`,
          Flag,
        ])}
      />
      {currentLang.lang}
      <Icon className={Arrow}>keyboard_arrow_down</Icon>
      {dropdown && (
        <div className={Dropdown}>
          {langs.map((lang) => (
            <div
              key={lang.code}
              onClick={() => i18n.changeLanguage(lang.code[0])}
              role="presentation"
            >
              <span
                className={classNames([
                  `flag-icon flag-icon-${lang.flag}`,
                  Flag,
                ])}
              />
              {lang.lang}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

LangSelect.propTypes = {
  className: string,
}

LangSelect.defaultProps = {
  className: '',
}

export default LangSelect
