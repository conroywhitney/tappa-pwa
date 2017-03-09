import ActionTypes from './action_types'

const tap = ({ index, playerId }) => (
  { type: ActionTypes.TAP, payload: { index, playerId } }
)

const tick = () => (
  { type: ActionTypes.TICK }
)

const playOpponent = index => (
  { type: ActionTypes.PLAY_OPPONENT, payload: { index } }
)

const playPlayer = index => (
  { type: ActionTypes.PLAY_PLAYER, payload: { index } }
)

const playRemote = ({ gameId, index, playerId }) => (
  { type: ActionTypes.PLAY_REMOTE, payload: { gameId, index, playerId } }
)

const reset = () => (
  { type: ActionTypes.RESET }
)

export default {
  tap,
  tick,
  playOpponent,
  playPlayer,
  playRemote,
  reset
}
