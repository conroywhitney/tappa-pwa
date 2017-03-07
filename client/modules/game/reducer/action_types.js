import { createActionTypes } from 'zeal-redux-utils'

export default createActionTypes(
  'tappa',
  [
    'TAP',
    'TICK',
    'PLAY_PLAYER',
    'PLAY_OPPONENT',
    'RESET'
  ]
)
