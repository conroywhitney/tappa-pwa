// @flow

import React from 'react'
import classnames from 'classnames'

import { PLAYERS } from '../../../../constants'

import styles from './styles.scss'

export default function Tile({ player, onClick }) {
  const tileColor = {
    [PLAYERS.opponent]: styles.opponent,
    [PLAYERS.me]: styles.me
  }[player]

  const tileStyle = classnames(styles.tile, tileColor)

  return (
    <div className={tileStyle} onTouchStart={onClick} />
  )
}
