import ActionTypes from './action_types'

const iotConnect = () => (
  { type: ActionTypes.IOT_CONNECT }
)

const iotClosed = () => (
  { type: ActionTypes.IOT_CLOSED }
)

const iotConnected = () => (
  { type: ActionTypes.IOT_CONNECTED }
)

const iotDisconnect = () => (
  { type: ActionTypes.IOT_DISCONNECT }
)

const iotReceived = payload => (
  { type: ActionTypes.IOT_RECEIVED, payload }
)

const iotSend = payload => (
  { type: ActionTypes.IOT_SEND, payload }
)

export default {
  iotConnect,
  iotClosed,
  iotConnected,
  iotDisconnect,
  iotReceived,
  iotSend
}
