import ActionTypes from './action_types'

const multiplayerConnect = () => (
  { type: ActionTypes.MULTIPLAYER_CONNECT }
)

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

const sendRemoteTap = index => (
  { type: ActionTypes.SEND_REMOTE_TAP, payload: { index } }
)

export default {
  multiplayerConnect,
  tap,
  tick,
  playPlayer,
  playOpponent,
  reset,
  sendRemoteTap
}
