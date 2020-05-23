import React, { useContext } from 'react'
import {
  string,
  oneOfType,
  arrayOf,
  node,
} from 'prop-types'
import Icon from '@material-ui/core/Icon'

import {
  Wrapper,
  Arrow,
  Dark,
  Light,
} from './LinkFadingArrow.module.css'

import classNames from '../../Helpers/classNames'
import { Context } from '../../../App'

const LinkFadingArrow = ({ className, link, children }) => {
  const { darkTheme } = useContext(Context)

  return (
    <a
      className={classNames([className, Wrapper, darkTheme ? Dark : Light])}
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
      <Icon className={Arrow}>arrow_forward</Icon>
    </a>
  )
}

LinkFadingArrow.propTypes = {
  className: string,
  link: string.isRequired,
  children: oneOfType([
    arrayOf(node),
    node,
  ]).isRequired,
}

LinkFadingArrow.defaultProps = {
  className: '',
}

export default LinkFadingArrow
