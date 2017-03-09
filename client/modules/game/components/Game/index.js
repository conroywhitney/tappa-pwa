// @flow

import React from 'react'
import { pick } from 'ramda'

import SinglePlayer from '../SinglePlayer/container'
import Multiplayer from '../Multiplayer/container'

import { MODES } from '../../../../constants'

import styles from './styles.scss'

export default function Game(props) {
  const { mode } = props
  const singlePlayerProps = pick([
    'board', 'playerId', 'status', 'resetGame'
  ])
  const multiplayerProps = pick([
    'board', 'playerId', 'opponent', 'status', 'resetGame'
  ])

  return (
    <div className={styles.container}>
      {mode === MODES.singlePlayer &&
        <SinglePlayer {...singlePlayerProps(props)} />}

      {mode === MODES.multiplayer &&
        <Multiplayer {...multiplayerProps(props)} />}
    </div>
  )
}
