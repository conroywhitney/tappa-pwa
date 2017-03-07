// @flow

import React from 'react'
import RTDialog from 'react-toolbox/lib/dialog'

import { STATUS } from '../../../../constants'

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

export default function GameOverAlert({ status, onPress }) {
  const closeDialog = onPress
  const actions = [{ label: 'Play Again', onClick: closeDialog }]
  const Dialog = dialogs[status]

  if (!Dialog) return null

  return (
    <div>
      <Dialog
          actions={actions}
          active
          onEscKeyDown={closeDialog}
          onOverlayClick={closeDialog} />
    </div>
  )
}
