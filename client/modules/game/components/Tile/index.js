// @flow

import React from 'react'
import classnames from 'classnames'

import { PLAYERS } from '../../../../constants'

import styles from './styles.scss'

export default function Tile({ playerId, _position, onClick }) {
  const tileColor = {
    [PLAYERS.opponent]: styles.opponent,
    [PLAYERS.me]: styles.me
  }[playerId]

  const tileStyle = classnames(styles.tile, tileColor)

  return (
    <div className={tileStyle} onClick={onClick} />
  )
}
