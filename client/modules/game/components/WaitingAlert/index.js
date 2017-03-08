// @flow

import React from 'react'
import RTDialog from 'react-toolbox/lib/dialog'
import { themr } from 'react-css-themr'

import dialogTheme from './theme.scss'

function WaitingAlert({ opponent, theme, startGame }) {
  if (opponent) return null

  const closeDialog = () => null
  const actions = [{ label: 'Cancel', onClick: startGame }]

  return (
    <div>
      <RTDialog
          actions={actions}
          active
          theme={theme}
          title='Waiting for Opponent'
          onEscKeyDown={closeDialog}
          onOverlayClick={closeDialog}>

          Just one second while the other player joins the game.
          If this is taking too long, hit the Cancel button.

      </RTDialog>
    </div>
  )
}

export default themr('', dialogTheme)(WaitingAlert)
