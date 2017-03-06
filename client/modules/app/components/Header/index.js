import React from 'react'
import { themr } from 'react-css-themr'

import appTheme from '../App/theme.scss'

export function Header({ theme }) {
  return (
    <div className={theme.header}>
      <h4>Tappa&sup3;</h4>
    </div>
  )
}

export default themr('', appTheme)(Header)
