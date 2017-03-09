import React from 'react'
import { themr } from 'react-css-themr'

import Menu from '../Menu'

import headerTheme from './theme.scss'

export function Header({ mode, theme, switchMode }) {
  return (
    <div className={theme.header}>
      <div className={theme.menu}>
        <Menu mode={mode} onSelect={switchMode} />
      </div>
      <div className={theme.title}>
        <h4>Tappa&sup3;</h4>
      </div>
      <div className={theme.placeholder} />
    </div>
  )
}

export default themr('', headerTheme)(Header)
