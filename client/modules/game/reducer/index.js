import {
  all,
  always,
  clamp,
  compose,
  equals,
  flip,
  merge,
  prop,
  propEq,
  times,
  update
} from 'ramda'
import { createReducer } from 'zeal-redux-utils'
import uuidV4 from 'uuid/v4'

import ActionTypes from './action_types'
import { COUNTDOWN, PLAYERS, QTY, STATUS } from '../../../constants'

export const INITIAL_STATE = {
  playerId: uuidV4(),
  board: times(always(PLAYERS.blank), QTY),
  countdown: 30,
  lives: 3,
  opponent: null,
  status: STATUS.inProgress
}

const reverseMerge = flip(merge)

const playerWon = all(equals(PLAYERS.me))
const playerLost = all(equals(PLAYERS.opponent))

// eslint-disable-next-line complexity
const newStatus = ({ board, countdown, lives, _status }) => {
  if (board && playerWon(board)) return STATUS.won
  if (board && playerLost(board)) return STATUS.lost
  if (countdown <= 0) return STATUS.lost
  if (lives <= 0) return STATUS.lost

  return STATUS.inProgress
}

const newBoard = ({ index, player, board }) =>
  update(index, player, board)

const newCountdown = ({ countdown }) =>
  clamp(COUNTDOWN.min, COUNTDOWN.max, countdown - 1)

const newLives = ({ index, board, lives }) =>
  board[index] === PLAYERS.me ? lives - 1 : lives

const stillPlaying = propEq('status', STATUS.inProgress)

const updateStatus = (gameState: Object) =>
  reverseMerge({ status: newStatus(gameState) }, gameState)

const updateGameState = (gameState, properties) => {
  if (!stillPlaying(gameState)) return gameState

  return compose(updateStatus, reverseMerge(properties))(gameState)
}

const updateBoard = (gameState: Object, index, player: Number) =>
  updateGameState(gameState, {
    board: newBoard({ index, player, board: gameState.board })
  })

const playPlayer = (gameState: Object, { payload: { index } }) =>
  updateBoard(gameState, index, PLAYERS.me)

const playOpponent = (gameState: Object, { payload: { index } }) =>
  updateBoard(gameState, index, PLAYERS.opponent)

const reset = (_gameState: Object) => INITIAL_STATE

const myPlayerId = prop('playerId')

const singlePlayerTap = (gameState: Object, { index }) =>
  updateGameState(
    playPlayer(gameState, { payload: { index } }),
    {
      lives: newLives({ index, board: gameState.board, lives: gameState.lives })
    }
  )

const multiplayerOpponent = (gameState: Object, { index }) =>
  playOpponent(gameState, { payload: { index } })

const tap = (gameState: Object, { payload: { index, playerId } }) =>
  (playerId === myPlayerId(gameState))
    ? singlePlayerTap(gameState, { index })
    : multiplayerOpponent(gameState, { index })

const tick = (gameState: Object, _payload: Object) =>
  updateGameState(gameState, {
    countdown: newCountdown({ countdown: gameState.countdown })
  })

export default createReducer(INITIAL_STATE, {
  [ActionTypes.PLAY_OPPONENT]: playOpponent,
  [ActionTypes.PLAY_PLAYER]: playPlayer,
  [ActionTypes.RESET]: reset,
  [ActionTypes.TAP]: tap,
  [ActionTypes.TICK]: tick
})
