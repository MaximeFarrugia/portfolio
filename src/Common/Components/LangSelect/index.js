import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import { useTranslation } from 'react-i18next'

import classNames from '../../Helpers/classNames'
import getLocale, { langs } from '../../Helpers/getLocale'
import Select from '../Select'

const LangSelect = ({ className }) => {
  const { i18n } = useTranslation()
  const currentLang = getLocale(i18n)

  return (
    <Select
      className={classNames([className])}
      value={{
        label: currentLang.lang,
        value: currentLang.codes[0],
        customElement: (
          <Flag className={`flag-icon flag-icon-${currentLang.flag}`} />
        ),
      }}
      options={langs.map(lang => ({
        label: lang.lang,
        value: lang.codes[0],
        customElement: <Flag className={`flag-icon flag-icon-${lang.flag}`} />,
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

const Flag = styled.span`
  margin-right: 10px;
`

export default LangSelect
