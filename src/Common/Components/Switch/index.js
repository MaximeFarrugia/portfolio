import React from 'react'
import { string } from 'prop-types'

import { SwitchWrapper } from './Switch.module.css'

import classNames from '../../Helpers/classNames'

const Switch = ({ className, ...props }) => (
  <input
    {...props}
    type="checkbox"
    className={classNames([className, SwitchWrapper])}
  />
)

Switch.propTypes = {
  className: string,
}

Switch.defaultProps = {
  className: '',
}

export default Switch
