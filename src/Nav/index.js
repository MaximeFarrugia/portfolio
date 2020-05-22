import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from './Landing'

const Nav = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
  </Switch>
)

export default Nav
