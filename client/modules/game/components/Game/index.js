// @flow

import React from 'react'
import { pick } from 'ramda'

import SinglePlayer from '../SinglePlayer/container'
import Multiplayer from '../Multiplayer/container'

import { MODES } from '../../../../constants'

export default function Game(props) {
  const { mode } = props
  const singlePlayerProps = pick(['board', 'status', 'resetGame'])
  const multiplayerProps = pick(['board', 'opponent'])

  return (
    <div>
      {mode === MODES.singlePlayer &&
        <SinglePlayer {...singlePlayerProps(props)} />}

      {mode === MODES.multiplayer &&
        <Multiplayer {...multiplayerProps(props)} />}
    </div>
  )
}
