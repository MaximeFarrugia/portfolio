import { Theme } from '@emotion/react'

export const KEY_THEME = '@maxime-farrugia/theme'

export const availableThemes = {
  dark: {
    name: 'dark',
    background: '#2e3440',
    primary: '#eceff4',
    secondary: '#80c0d0',
    accent: '#ebcb8b',
  },
  light: {
    name: 'light',
    background: '#eceff4',
    primary: '#2e3440',
    secondary: '#5e81ac',
    accent: '#ebcb8b',
  },
}

export const loadTheme = (): Theme => {
  const storedTheme = localStorage.getItem(KEY_THEME)
  if (
    !storedTheme ||
    !Object.prototype.hasOwnProperty.call(availableThemes, storedTheme)
  ) {
    return availableThemes.dark
  }
  const theme = availableThemes[storedTheme as keyof typeof availableThemes]
  if (!theme) {
    return availableThemes.dark
  }
  return theme
}

export const saveTheme = (theme: Theme) => {
  localStorage.setItem(KEY_THEME, theme.name)
}
