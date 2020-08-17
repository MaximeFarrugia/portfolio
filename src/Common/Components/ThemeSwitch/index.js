import React, { useContext } from 'react'
import { string } from 'prop-types'

import {
  Wrapper,
  SwitchClass,
  Icon,
  Dark,
  Light,
} from './ThemeSwitch.module.css'

import Switch from '../Switch'
import { Context } from '../../../App'
import { ReactComponent as Sun } from './sun.svg'
import { ReactComponent as Moon } from './moon.svg'
import classNames from '../../Helpers/classNames'

const ThemeSwitch = ({ className }) => {
  const { darkTheme, setDarkTheme } = useContext(Context)

  return (
    <div className={classNames([className, Wrapper])}>
      <Moon className={classNames([Icon, darkTheme ? Dark : Light])} />
      <Switch
        className={classNames([SwitchClass, darkTheme ? Dark : Light])}
        onChange={() => setDarkTheme(!darkTheme)}
        checked={!darkTheme}
      />
      <Sun className={classNames([Icon, darkTheme ? Dark : Light])} />
    </div>
  )
}

ThemeSwitch.propTypes = {
  className: string,
}

ThemeSwitch.defaultProps = {
  className: '',
}

export default ThemeSwitch
