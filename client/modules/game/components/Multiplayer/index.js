// @flow

import React, { Component } from 'react'

import Board from '../Board'
import GameOverAlert from '../GameOverAlert'
import WaitingAlert from '../WaitingAlert'

export default class Multiplayer extends Component {
  componentWillMount() {
    const { multiplayerConnect, opponent } = this.props

    if (!opponent) multiplayerConnect()
  }

  render() {
    const { board, opponent, status, handleTap, resetGame } = this.props

    return (
      <div>
        <GameOverAlert status={status} onPress={resetGame} />
        <WaitingAlert opponent={opponent} />
        <Board board={board} onClick={handleTap} />
      </div>
    )
  }
}
