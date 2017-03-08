import { always, evolve } from 'ramda'
import { createReducer } from 'zeal-redux-utils'

import ActionTypes from './action_types'

import { SERVER_STATUS } from '../../../constants'

// eslint-disable-next-line no-console
const logger = (...message) => console.log('IoT reducer', ...message)

export const INITIAL_STATE = {
  // eslint-disable-next-line max-len
  keysUrl: 'https://7e6snyl76g.execute-api.us-east-1.amazonaws.com/dev/iot/keys',
  status: SERVER_STATUS.disconnected
}

const iotClosed = (iotState: Object) => {
  logger('iotClosed')

  return evolve({
    iot: {
      status: always(SERVER_STATUS.disconnected)
    }
  })(iotState)
}

const iotConnected = (iotState: Object) => {
  logger('iotConnected')

  return evolve({
    iot: {
      status: always(SERVER_STATUS.connected)
    }
  })(iotState)
}

const iotReceived = (iotState: Object, action: Object) => {
  const { payload } = action
  const { message } = payload

  logger('iotReceived', 'message', message.toString())

  return iotState
}

const iotConnect = (iotState: Object) => {
  logger('iotConnect')

  return evolve({
    iot: {
      status: always(SERVER_STATUS.connecting)
    }
  })(iotState)
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
  [ActionTypes.IOT_CONNECTED]: iotConnected,
  [ActionTypes.IOT_RECEIVED]: iotReceived,
  [ActionTypes.IOT_CONNECT]: iotConnect,
  [ActionTypes.IOT_SEND]: iotSend
})
