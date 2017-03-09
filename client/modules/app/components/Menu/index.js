import React from 'react'
import { IconMenu, MenuItem } from 'react-toolbox/lib/menu'
import { themr } from 'react-css-themr'

import menuTheme from './theme.scss'

import { MODES } from '../../../../constants'

export function Menu({ mode, theme, onSelect }) {
  return (
    <IconMenu
        icon='more_vert'
        menuRipple
        onSelect={onSelect}
        selectable
        selected={mode}
        theme={theme}>
      <MenuItem
          caption='Single Player'
          icon='person'
          value={MODES.singlePlayer}
          theme={theme} />
      <MenuItem
          caption='Multiplayer'
          icon='group'
          value={MODES.multiplayer}
          theme={theme} />
    </IconMenu>
  )
}

export default themr('', menuTheme)(Menu)
