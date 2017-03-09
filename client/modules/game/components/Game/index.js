// @flow

import React from 'react'
import { pick } from 'ramda'

import SinglePlayer from '../SinglePlayer/container'
import Multiplayer from '../Multiplayer/container'

import { MODES } from '../../../../constants'

import styles from './styles.scss'

export default function Game(props) {
  const { mode } = props

  return (
    <div className={styles.container}>
      {mode === MODES.singlePlayer && renderSinglePlayer(props)}
      {mode === MODES.multiplayer && renderMultiplayer(props)}
    </div>
  )
}

function renderSinglePlayer(props) {
  const singlePlayerProps = pick([
    'board', 'playerId', 'status', 'resetGame'
  ])

  return (
    <SinglePlayer {...singlePlayerProps(props)} />
  )
}

function renderMultiplayer(props) {
  const multiplayerProps = pick([
    'board', 'playerId', 'opponent', 'status', 'resetGame'
  ])

  return (
    <Multiplayer {...multiplayerProps(props)} />
  )
}
