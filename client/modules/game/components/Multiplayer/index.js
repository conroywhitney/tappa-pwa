// @flow

import React, { Component } from 'react'

import Board from '../Board'
import GameOverAlert from '../GameOverAlert'
import WaitingAlert from '../WaitingAlert'

export default class Multiplayer extends Component {
  componentWillMount() {
    const { multiplayerConnect, connected } = this.props

    if (!connected) multiplayerConnect()
  }

  render() {
    const {
      board,
      connected,
      status,
      handleTap,
      resetGame,
      startGame
    } = this.props

    return (
      <div>
        <GameOverAlert status={status} onPress={resetGame} />
        <WaitingAlert connected={connected} startGame={startGame} />
        <Board board={board} onClick={handleTap} />
      </div>
    )
  }
}
