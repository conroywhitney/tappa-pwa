import {
  all,
  always,
  clamp,
  compose,
  equals,
  flip,
  merge,
  propEq,
  times,
  update
} from 'ramda'
import { createActions, createReducer } from 'reduxsauce'
import { COUNTDOWN, PLAYERS, QTY, STATUS } from '../../../constants'

/* ------------- Helpers ------------------- */
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

const updateBoard = (gameState: Object, { index }, player: Number) =>
  updateGameState(gameState, {
    board: newBoard({ index, player, board: gameState.board })
  })

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  tap: ['index'],
  tick: [],
  playPlayer: ['index'],
  playOpponent: ['index'],
  reset: null
})

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  board: times(always(PLAYERS.blank), QTY),
  countdown: 30,
  lives: 3,
  opponent: null,
  status: STATUS.inProgress
}

/* ------------- Reducers ------------- */

const playPlayer = (gameState: Object, payload: Object) =>
  updateBoard(gameState, payload, PLAYERS.me)

const playOpponent = (gameState: Object, payload: Object) =>
  updateBoard(gameState, payload, PLAYERS.opponent)

const reset = (_gameState: Object) => INITIAL_STATE

const tap = (gameState: Object, { index }) =>
  updateGameState(
    playPlayer(gameState, { index }),
    {
      lives: newLives({ index, board: gameState.board, lives: gameState.lives })
    }
  )

const tick = (gameState: Object, _payload: Object) =>
  updateGameState(gameState, {
    countdown: newCountdown({ countdown: gameState.countdown })
  })

/* ------------- Selectors ------------- */

/* ------------- Hookup Reducers To Types ------------- */

const reducer = createReducer(INITIAL_STATE, {
  [Types.PLAY_PLAYER]: playPlayer,
  [Types.PLAY_OPPONENT]: playOpponent,
  [Types.RESET]: reset,
  [Types.TAP]: tap,
  [Types.TICK]: tick
})

/* ------------- Exports ------------- */

export {
  Creators as GameActions,
  reducer as GameReducer,
  Types as GameTypes
}
