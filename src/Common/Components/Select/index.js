/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react'
import {
  func, string, bool, oneOfType, shape, arrayOf,
} from 'prop-types'
import ReactSelect, { components } from 'react-select'
import { useTranslation } from 'react-i18next'

import {
  SelectWrapper,
  SelectClass,
  CheckIcon,
  RequiredInput,
  CancelIcon,
  Focused,
  Dark,
  Light,
} from './Select.module.css'

import classNames from '../../Helpers/classNames'
import Icon from '../Icon'
import { Context } from '../../../App'

const Option = ({ data, isSelected, ...props }) => (
  <components.Option {...props}>
    {data.customElement}
    {data.label}
    {isSelected && <Icon className={CheckIcon}>check</Icon>}
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
    <Icon className={CancelIcon}>cancel</Icon>
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
  const [focused, setFocused] = useState(false)
  const { t } = useTranslation()
  const { darkTheme } = useContext(Context)

  return (
    <div className={SelectWrapper}>
      <ReactSelect
        {...props}
        className={classNames([
          SelectClass,
          focused && Focused,
          className,
          darkTheme ? Dark : Light,
        ])}
        value={value}
        isMulti={isMulti}
        noOptionsMessage={() => noOptionsMessage || t('Aucun résultat')}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
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
            backgroundColor: darkTheme ? '#eceff4' : '#2e3440',
            '& > div:first-child': {
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
            backgroundColor: darkTheme ? '#eceff4' : '#2e3440',
          }),
          indicatorSeparator: base => ({
            ...base,
            display: 'none',
          }),
          dropdownIndicator: base => ({
            ...base,
            color: darkTheme ? '#2e3440' : '#eceff4',
            '&:hover': {
              color: darkTheme ? '#2e3440' : '#eceff4',
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
            backgroundColor: darkTheme ? '#eceff4' : '#2e3440',
            fontSize: '14px',
            color: isDisabled ? '#9b9b9b' : darkTheme ? '#2e3440' : '#eceff4',
            fontWeight: isDisabled ? 500 : 'normal',
            '&:hover': !isDisabled && {
              backgroundColor: '#5e81ac',
            },
          }),
          singleValue: base => ({
            ...base,
            overflow: 'visible',
            fontSize: '14px',
            color: darkTheme ? '#2e3440' : '#eceff4',
            fontWeight: 'normal',
            display: 'flex',
            alignItems: 'center',
          }),
          multiValue: styles => ({
            ...styles,
            height: '25px',
            borderRadius: '10px',
            fontSize: '14px',
            color: darkTheme ? '#2e3440' : '#eceff4',
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
      <input
        required={required && (value === '' || (isMulti && !value.length))}
        className={RequiredInput}
      />
    </div>
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

export default Select
