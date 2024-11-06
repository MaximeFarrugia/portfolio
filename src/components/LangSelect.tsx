import styled from '@emotion/styled'
import { components } from 'react-select'

import Select from './Select'
import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'

interface Props {
  className?: string
}

const langs = {
  en: {
    label: 'English',
    flag: 'gb',
  },
  fr: {
    label: 'Français',
    flag: 'fr',
  },
}

const LangSelect = ({ className }: Props) => {
  const { i18n } = useTranslation()
  const currentLang = useMemo(() => i18n.language.split('-')[0], [i18n.language])

  return (
    <Select
      className={className}
      isSearchable={false}
      value={{
        label: langs[currentLang as keyof typeof langs].label,
        value: currentLang,
        flag: langs[currentLang as keyof typeof langs].flag,
      }}
      options={Object.entries(langs).map(([key, value]) => ({
        label: value.label,
        value: key,
        flag: value.flag,
      }))}
      onChange={(e) => {
        if (e) {
          i18n.changeLanguage(e.value)
        }
      }}
      components={{
        Option: ({ data, ...optionProps }) => (
          <components.Option
            {...optionProps}
            data={data}
          >
            <Row>
              <span
                className={`fi fi-${data.flag}`}
              />
              {data.label}
            </Row>
          </components.Option>
        ),
        SingleValue: ({ data, ...singleValueProps }) => (
          <components.SingleValue
            {...singleValueProps}
            data={data}
          >
            <Row>
              <span
                className={`fi fi-${data.flag}`}
              />
              {data.label}
            </Row>
          </components.SingleValue>
        ),
      }}
    />
  )
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
`

export default LangSelect
