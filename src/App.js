import React, { createContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import * as Sentry from '@sentry/browser'

import Nav from './Nav'

export const Context = createContext()

class App extends React.Component {
  state = {
    darkTheme: true,
  }

  componentDidCatch(error, errorInfo) {
    const { i18n } = this.props

    Sentry.withScope((scope) => {
        scope.setTag('locale', i18n.language)
        scope.setExtras(errorInfo)
        Sentry.captureException(error)
    })
  }

  render() {
    const { darkTheme } = this.state

    return (
      <>
        <Context.Provider
          value={{
            darkTheme,
            setDarkTheme: (t) => this.setState({ darkTheme: t }),
          }}
        >
          <Router>
            <Nav />
          </Router>
        </Context.Provider>
      </>
    )
  }
}

export default withTranslation()(App)
