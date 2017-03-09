import { always, evolve } from 'ramda'
import { createReducer } from 'zeal-redux-utils'

import ActionTypes from './action_types'

import { SERVER_STATUS } from '../../../constants'

// eslint-disable-next-line no-console
// eslint-disable-next-line max-len
const logger = () => null // (...message) => console.log('IoT reducer', ...message)

export const INITIAL_STATE = {
  // eslint-disable-next-line max-len
  keysUrl: 'https://7e6snyl76g.execute-api.us-east-1.amazonaws.com/dev/iot/keys',
  status: SERVER_STATUS.disconnected
}

const iotConnect = evolve({ status: always(SERVER_STATUS.connecting) })

const iotDisconnect = evolve({ status: always(SERVER_STATUS.disconnecting) })

const iotClosed = evolve({ status: always(SERVER_STATUS.disconnected) })

const iotConnected = evolve({ status: always(SERVER_STATUS.connected) })

const iotReceived = (iotState: Object, action: Object) => {
  const { payload } = action

  logger('iotReceived', 'message', JSON.parse(payload.toString()))

  return iotState
}

const iotSend = (iotState: Object, payload: Object) => {
  logger(
    'IoT Reducer', 'iotSend',
    'payload', payload
  )

  return iotState
}

export default createReducer(INITIAL_STATE, {
  [ActionTypes.IOT_CLOSED]: iotClosed,
  [ActionTypes.IOT_CONNECT]: iotConnect,
  [ActionTypes.IOT_CONNECTED]: iotConnected,
  [ActionTypes.IOT_DISCONNECT]: iotDisconnect,
  [ActionTypes.IOT_RECEIVED]: iotReceived,
  [ActionTypes.IOT_SEND]: iotSend
})
