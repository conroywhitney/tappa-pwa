// @flow

import React from 'react'

import Board from '../Board'
import GameOverAlert from '../GameOverAlert'

export default function SinglePlayer({ board, status, handleTap, resetGame }) {
  return (
    <div>
      <GameOverAlert status={status} onPress={resetGame} />
      <Board board={board} onClick={handleTap} />
    </div>
  )
}
