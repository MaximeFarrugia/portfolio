import React, { useContext } from 'react'
import styled from 'styled-components'
import { func, string, bool, oneOfType, shape, arrayOf } from 'prop-types'
import ReactSelect, { components } from 'react-select'
import { useTranslation } from 'react-i18next'

import Icon from '../Icon'
import { Context } from '../../../App'

const Option = ({ data, isSelected, ...props }) => (
  <components.Option {...props}>
    {data.customElement}
    {data.label}
    {isSelected && <CheckIcon>check</CheckIcon>}
  </components.Option>
)

const SingleValue = ({ data, ...props }) => (
  <components.SingleValue {...props}>
    {data.customElement}
    {data.label}
  </components.SingleValue>
)

const MultiValueRemove = props => (
  <components.MultiValueRemove {...props}>
    <CancelIcon>cancel</CancelIcon>
  </components.MultiValueRemove>
)

const Select = ({
  className,
  isMulti,
  noOptionsMessage,
  value,
  required,
  onScroll,
  ...props
}) => {
  const { t } = useTranslation()
  const { theme } = useContext(Context)

  return (
    <Wrapper className={className}>
      <SelectClass
        {...props}
        value={value}
        isMulti={isMulti}
        noOptionsMessage={() => noOptionsMessage || t('Aucun résultat')}
        onMenuScrollToBottom={() => onScroll()}
        components={{
          Option,
          SingleValue,
          MultiValueRemove,
        }}
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: 'transparent',
          },
        })}
        styles={{
          control: base => ({
            ...base,
            minHeight: 'inherit',
            maxHeight: 'inherit',
            height: '100%',
            border: 'none',
            backgroundColor: theme.primary,
            '& > div:first-of-type': {
              height: 'inherit',
              maxHeight: 'inherit',
              overflow: 'auto',
            },
          }),
          menu: base => ({
            ...base,
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)',
          }),
          menuList: base => ({
            ...base,
            backgroundColor: theme.primary,
            borderRadius: '0 0 5px 5px',
          }),
          indicatorSeparator: base => ({
            ...base,
            display: 'none',
          }),
          dropdownIndicator: base => ({
            ...base,
            color: theme.background,
            '&:hover': {
              color: theme.background,
            },
          }),
          placeholder: base => ({
            ...base,
            color: '#9b9b9b',
          }),
          option: (base, { isDisabled }) => ({
            ...base,
            height: '35px',
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            textAlign: 'left',
            backgroundColor: theme.primary,
            fontSize: '14px',
            color: isDisabled ? '#9b9b9b' : theme.background,
            fontWeight: isDisabled ? 500 : 'normal',
            '&:hover': !isDisabled && {
              backgroundColor: theme.accent,
              color: theme.primary,
            },
          }),
          singleValue: base => ({
            ...base,
            overflow: 'visible',
            fontSize: '14px',
            color: theme.background,
            fontWeight: 'normal',
            display: 'flex',
            alignItems: 'center',
          }),
          multiValue: styles => ({
            ...styles,
            height: '25px',
            borderRadius: '10px',
            fontSize: '14px',
            color: theme.background,
            fontWeight: 'normal',
            backgroundColor: '#f3f3f3',
            display: 'flex',
            alignItems: 'center',
          }),
          multiValueRemove: styles => ({
            ...styles,
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'unset',
            },
          }),
        }}
      />
      <RequiredInput
        required={required && (value === '' || (isMulti && !value.length))}
      />
    </Wrapper>
  )
}

Select.propTypes = {
  className: string,
  isMulti: bool,
  noOptionsMessage: string,
  value: oneOfType([
    shape({ label: string, value: string }),
    arrayOf(shape({ label: string, value: string })),
    string,
  ]),
  required: bool,
  onScroll: func,
}

Select.defaultProps = {
  className: '',
  isMulti: false,
  noOptionsMessage: '',
  value: '',
  required: false,
  onScroll: () => {},
}

const Wrapper = styled.div`
  font-size: 12px;
  color: #9b9b9b;
  min-height: 40px;
  cursor: pointer;
`

const SelectClass = styled(ReactSelect)`
  border: 1px solid ${props => props.theme.background};
  border-radius: 5px;
`

const CheckIcon = styled(Icon)`
  position: absolute;
  right: 0;
  padding-right: 10px;
`

const CancelIcon = styled(Icon)`
  font-size: 16px;
  color: #7a7a7a;
`

const RequiredInput = styled.input`
  font-size: 12px;
  font-weight: 300;
  position: absolute;
  background-color: transparent;
  bottom: 0;
  left: 50%;
  width: 0px;
  height: 0px;
  cursor: default;
  border: none;
  outline: none;
`

export default Select
