// @flow

import React from 'react'
import RTDialog from 'react-toolbox/lib/dialog'
import { themr } from 'react-css-themr'

import { STATUS } from '../../../../constants'

import dialogTheme from './theme.scss'

const WonDialog = props => (
  <RTDialog {...props} title='You win!'>
    Congratulations! You have won!
  </RTDialog>
)

const LostDialog = props => (
  <RTDialog {...props} title='You lost :('>
    Aww, so close! Try again!
  </RTDialog>
)

const dialogs = {
  [STATUS.lost]: LostDialog,
  [STATUS.won]: WonDialog
}

function GameOverAlert({ status, theme, onPress }) {
  const closeDialog = onPress
  const actions = [{ label: 'Play Again', onClick: closeDialog }]
  const Dialog = dialogs[status]

  if (!Dialog) return null

  return (
    <div>
      <Dialog
          actions={actions}
          active
          className={theme.dialog}
          theme={theme}
          onEscKeyDown={closeDialog}
          onOverlayClick={closeDialog} />
    </div>
  )
}

export default themr('', dialogTheme)(GameOverAlert)
