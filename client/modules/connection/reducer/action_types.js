import { createActionTypes } from 'zeal-redux-utils'

export default createActionTypes(
  'tappa',
  [
    'CONNECTION_ON_SERVER_CLOSE',
    'CONNECTION_ON_SERVER_CONNECT',
    'CONNECTION_ON_SERVER_MESSAGE',
    'MULTIPLAYER_CONNECT'
  ]
)
