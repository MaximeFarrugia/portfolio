import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

import { getLocale, setLocale, langs } from '../../Helpers/i18n'
import Select from '../Select'

const LangSelect = ({ className }) => {
  const currentLang = langs.find(l => l.code === getLocale())

  return (
    <Select
      className={className}
      value={{
        label: currentLang.lang,
        value: currentLang.code,
        customElement: (
          <Flag className={`flag-icon flag-icon-${currentLang.flag}`} />
        ),
      }}
      options={langs.map(lang => ({
        label: lang.lang,
        value: lang.code,
        customElement: <Flag className={`flag-icon flag-icon-${lang.flag}`} />,
      }))}
      onChange={({ value }) => setLocale(value, true)}
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
