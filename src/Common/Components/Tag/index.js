import React, { useContext } from 'react'
import { string } from 'prop-types'

import { Wrapper, Dark, Light } from './Tag.module.css'

import classNames from '../../Helpers/classNames'
import { Context } from '../../../App'

const Tag = ({ className, name }) => {
  const { darkTheme } = useContext(Context)

  return (
    <div className={classNames([className, Wrapper, darkTheme ? Dark : Light])}>
      {name}
    </div>
  )
}

Tag.propTypes = {
  className: string,
  name: string.isRequired,
}

Tag.defaultProps = {
  className: '',
}

export default Tag
