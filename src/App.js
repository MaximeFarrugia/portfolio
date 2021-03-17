import React, { createContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import { ThemeProvider } from 'styled-components'
import * as Sentry from '@sentry/browser'

import { availableThemes } from './Common/Components/ThemeSwitch'
import Nav from './Nav'

export const Context = createContext()

class App extends React.Component {
  state = {
    theme: availableThemes.dark,
  }

  componentDidCatch(error, errorInfo) {
    const { i18n } = this.props

    Sentry.withScope(scope => {
      scope.setTag('locale', i18n.language)
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

export default withTranslation()(App)
