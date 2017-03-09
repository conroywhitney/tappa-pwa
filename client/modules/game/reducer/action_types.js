import { createActionTypes } from 'zeal-redux-utils'

export default createActionTypes(
  'tappa/game',
  [
    'PLAY_OPPONENT',
    'PLAY_PLAYER',
    'PLAY_REMOTE',
    'RESET',
    'TAP',
    'TICK'
  ]
)
