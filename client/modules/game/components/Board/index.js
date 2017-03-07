// @flow

import React from 'react'

import { NUM_TILES } from '../../../../constants'
import Tile from '../Tile'

import styles from './styles.scss'

function renderTiles({ board, onClick }) {
  const result = []

  for (let index = 0; index < NUM_TILES; index += 1) {
    const playerId = board[index]

    // eslint-disable-next-line no-loop-func
    result.push(
      <Tile
          key={index}
          playerId={playerId}
          onClick={() => onClick(index)} />
    )
  }

  return result
}

export default function Board(props) {
  return (
    <div className={styles.container}>
      {renderTiles(props)}
    </div>
  )
}
