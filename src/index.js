import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/browser'

import App from './App'
import './Common/Helpers/i18n'
import './index.css'
import * as serviceWorker from './serviceWorker'

Sentry.init({dsn: "https://4ed57d4a8cf14d83abb61123aab328e9@o412083.ingest.sentry.io/5288303"})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
