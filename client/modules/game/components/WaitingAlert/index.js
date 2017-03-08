// @flow

import React from 'react'
import RTDialog from 'react-toolbox/lib/dialog'
import { themr } from 'react-css-themr'

import dialogTheme from './theme.scss'

function WaitingAlert({ connected, theme }) {
  if (connected) return null

  const doNothing = () => null

  return (
    <div>
      <RTDialog
          active
          theme={theme}
          title='Waiting for Opponent'
          onEscKeyDown={doNothing}
          onOverlayClick={doNothing}>

          Just one second while the other player joins the game.

      </RTDialog>
    </div>
  )
}

export default themr('', dialogTheme)(WaitingAlert)
