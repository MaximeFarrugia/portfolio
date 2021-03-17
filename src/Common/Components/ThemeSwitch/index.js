import React, { useContext } from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

import Switch from '../Switch'
import { Context } from '../../../App'
import { ReactComponent as SunIcon } from './sun.svg'
import { ReactComponent as MoonIcon } from './moon.svg'

export const availableThemes = {
  dark: {
    name: 'dark',
    background: '#2e3440',
    primary: '#eceff4',
    secondary: '#80c0d0',
    accent: '#5e81ac',
  },
  light: {
    name: 'light',
    background: '#eceff4',
    primary: '#2e3440',
    secondary: '#5e81ac',
    accent: '#80c0d0',
  },
}

const ThemeSwitch = ({ className }) => {
  const { theme, setTheme } = useContext(Context)

  return (
    <Wrapper className={className}>
      <Moon />
      <Switch
        onChange={() =>
          setTheme(availableThemes[theme.name === 'dark' ? 'light' : 'dark'])
        }
        checked={theme.name !== 'dark'}
      />
      <Sun />
    </Wrapper>
  )
}

ThemeSwitch.propTypes = {
  className: string,
}

ThemeSwitch.defaultProps = {
  className: '',
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Moon = styled(MoonIcon)`
  width: 15px;
  height: 15px;

  & path {
    fill: ${props => props.theme.primary};
  }
`

const Sun = styled(SunIcon)`
  width: 15px;
  height: 15px;

  & path {
    fill: ${props => props.theme.primary};
  }
`

export default ThemeSwitch
