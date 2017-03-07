import { createActionTypes } from 'zeal-redux-utils'

export default createActionTypes(
  'tappa',
  [
    'MULTIPLAYER_CONNECT',
    'PLAY_OPPONENT',
    'PLAY_PLAYER',
    'RESET',
    'SEND_REMOTE_TAP',
    'TAP',
    'TICK'
  ]
)
