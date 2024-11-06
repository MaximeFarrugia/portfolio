import { createContext, PropsWithChildren, useCallback, useState } from 'react'
import { Theme, ThemeProvider } from '@emotion/react'

import { loadTheme, saveTheme } from './utils'

interface MyThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => unknown
}

export const MyThemeContext = createContext<MyThemeContextType | null>(null)

const MyThemeProvider = ({ children }: PropsWithChildren) => {
  const [themeInner, setThemeInner] = useState(loadTheme())

  const setTheme = useCallback((newTheme: Theme) => {
    saveTheme(newTheme)
    setThemeInner(newTheme)
  }, [setThemeInner])

  return (
    <MyThemeContext.Provider value={{ theme: themeInner, setTheme }}>
      <ThemeProvider theme={themeInner}>
        {children}
      </ThemeProvider>
    </MyThemeContext.Provider>
  )
}

export default MyThemeProvider
