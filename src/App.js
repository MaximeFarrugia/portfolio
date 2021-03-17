import React, { createContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import * as Sentry from '@sentry/browser'

import { availableThemes } from './Common/Components/ThemeSwitch'
import { getLocale } from './Common/Helpers/i18n'
import Nav from './Nav'

export const Context = createContext()

class App extends React.Component {
  state = {
    theme: availableThemes.dark,
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
      scope.setTag('locale', getLocale())
      scope.setExtras(errorInfo)
      Sentry.captureException(error)
    })
  }

  render() {
    const { theme } = this.state

    return (
      <Context.Provider
        value={{
          theme,
          setTheme: t => this.setState({ theme: t }),
        }}
      >
        <ThemeProvider theme={theme}>
          <Router>
            <Nav />
          </Router>
        </ThemeProvider>
      </Context.Provider>
    )
  }
}

export default App
