import { createActionTypes } from 'zeal-redux-utils'

export default createActionTypes(
  'tappa',
  [
    'PLAY_OPPONENT',
    'PLAY_PLAYER',
    'RESET',
    'TAP',
    'TICK'
  ]
)
