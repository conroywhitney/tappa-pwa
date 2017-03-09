import { createActionTypes } from 'zeal-redux-utils'

export default createActionTypes(
  'tappa/iot',
  [
    'IOT_CONNECT',
    'IOT_CLOSED',
    'IOT_CONNECTED',
    'IOT_DISCONNECT',
    'IOT_RECEIVED',
    'IOT_SEND'
  ]
)
