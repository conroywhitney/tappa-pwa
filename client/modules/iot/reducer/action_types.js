import { createActionTypes } from 'zeal-redux-utils'

export default createActionTypes(
  'tappa',
  [
    'IOT_CONNECT',
    'IOT_CLOSED',
    'IOT_CONNECTED',
    'IOT_RECEIVED',
    'IOT_SEND'
  ]
)
