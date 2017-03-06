import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { themr } from 'react-css-themr'

import appTheme from './theme.scss'

import Header from '../Header'

export function App({ theme }) {
  return (
    <div className={theme.app}>
      <Header />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

function Home() {
  return (
    <h5 style={{ margin: 40 }}>
      Home
    </h5>
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
