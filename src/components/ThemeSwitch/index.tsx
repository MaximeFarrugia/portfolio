import styled from '@emotion/styled'

import SwitchComponent from '../Switch'
import SunIcon from './Sun'
import MoonIcon from './Moon'
import useMyTheme from './useMyTheme'
import { availableThemes } from './utils'

interface Props {
  className?: string
}

const ThemeSwitch = ({ className }: Props) => {
  const { theme, setTheme } = useMyTheme()

  return (
    <Wrapper className={className}>
      <Moon />
      <Switch
        onChange={() => {
          const newTheme =
            availableThemes[theme.name === 'dark' ? 'light' : 'dark']
          setTheme(newTheme)
        }}
        checked={theme.name !== 'dark'}
      />
      <Sun />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Switch = styled(SwitchComponent)`
  margin: 0 10px;
`

const Moon = styled(MoonIcon)`
  width: 15px;
  height: 15px;

  & path {
    fill: ${(props) => props.theme.primary};
  }
`

const Sun = styled(SunIcon)`
  width: 15px;
  height: 15px;

  & path {
    fill: ${(props) => props.theme.primary};
  }
`

export default ThemeSwitch
