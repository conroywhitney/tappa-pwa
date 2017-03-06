import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { themr } from 'react-css-themr'

import { Game } from '../../../game'
import Header from '../Header'

import appTheme from './theme.scss'

export function App({ theme }) {
  return (
    <div className={theme.app}>
      <Header />

      <Switch>
        <Route exact path='/' component={Game} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

function NotFound() {
  return (
    <h5 style={{ margin: 40 }}>
      Route not found
    </h5>
  )
}

export default themr('', appTheme)(App)
