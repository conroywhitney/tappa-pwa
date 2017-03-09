import React from 'react'
import { IconMenu, MenuItem } from 'react-toolbox/lib/menu'
import { themr } from 'react-css-themr'

import menuTheme from './theme.scss'

export function Menu({ theme }) {
  return (
    <IconMenu icon='more_vert' menuRipple theme={theme} onSelect={() => null}>
      <MenuItem value='singlePlayer' icon='person' caption='Single Player' />
      <MenuItem value='multiplayer' icon='group' caption='Multiplayer' />
    </IconMenu>
  )
}

export default themr('', menuTheme)(Menu)
