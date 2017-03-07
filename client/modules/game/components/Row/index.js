// @flow

import React from 'react'

import { SIZE } from '../../../../constants'

import Tile from '../Tile'

import styles from './styles.scss'

export default function Row({ board, row, onClick }) {
  const tiles = []

  for (let column = 0; column < SIZE; column += 1) {
    const index = (row * SIZE) + column
    const player = board[index]

    tiles.push(
      <Tile player={player} key={index} onClick={() => onClick(index)} />
    )
  }

  return (
    <div className={styles.row}>
      {tiles}
    </div>
  )
}
