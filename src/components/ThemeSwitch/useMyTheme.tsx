import { useContext } from 'react'

import { MyThemeContext } from './MyThemeProvider'

const useMyTheme = () => {
  const context = useContext(MyThemeContext)
  if (!context) {
    throw new Error('useMyTheme must be used within a MyThemeProvider')
  }

  return context
}

export default useMyTheme
