import ActionTypes from './action_types'

const tap = index => (
  { type: ActionTypes.TAP, payload: { index } }
)

const tick = () => (
  { type: ActionTypes.TICK }
)

const playPlayer = index => (
  { type: ActionTypes.PLAY_PLAYER, payload: { index } }
)

const playOpponent = index => (
  { type: ActionTypes.PLAY_OPPONENT, payload: { index } }
)

const reset = () => (
  { type: ActionTypes.RESET }
)

export default {
  tap,
  tick,
  playPlayer,
  playOpponent,
  reset
}
