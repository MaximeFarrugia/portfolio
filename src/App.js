import React, { createContext, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Nav from './Nav'

export const Context = createContext()

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true)

  return (
    <>
      <Context.Provider
        value={{
          darkTheme,
          setDarkTheme: (t) => setDarkTheme(t),
        }}
      >
        <Router>
          <Nav />
        </Router>
      </Context.Provider>
    </>
  )
}

// Design by Brittany Chiang: https://github.com/bchiang7/v3

export default App
