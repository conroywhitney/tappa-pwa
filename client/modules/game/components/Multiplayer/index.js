// @flow

import React from 'react'

import Board from '../Board'
import GameOverAlert from '../GameOverAlert'
import WaitingAlert from '../WaitingAlert'

export default function Multiplayer(props) {
  const { board, opponent, status, handleTap, resetGame } = props

  return (
    <div>
      <GameOverAlert status={status} onPress={resetGame} />
      <WaitingAlert opponent={opponent} />
      <Board board={board} onClick={handleTap} />
    </div>
  )
}
