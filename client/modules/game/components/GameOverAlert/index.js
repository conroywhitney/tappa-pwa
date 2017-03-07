// @flow

import React from 'react'
import classnames from 'classnames'
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

const dialogClass = {
  [STATUS.lost]: dialogTheme.lost,
  [STATUS.won]: dialogTheme.won
}

function GameOverAlert({ status, theme, onPress }) {
  const closeDialog = onPress
  const actions = [{ label: 'Play Again', onClick: closeDialog }]
  const Dialog = dialogs[status]
  const classes = classnames(theme.dialog, dialogClass[status])

  if (!Dialog) return null

  return (
    <div>
      <Dialog
          actions={actions}
          active
          className={classes}
          theme={theme}
          onEscKeyDown={closeDialog}
          onOverlayClick={closeDialog} />
    </div>
  )
}

export default themr('', dialogTheme)(GameOverAlert)
