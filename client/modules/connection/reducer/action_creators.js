import ActionTypes from './action_types'

const multiplayerConnect = () => (
  { type: ActionTypes.MULTIPLAYER_CONNECT }
)

const onServerClose = () => (
  { type: ActionTypes.CONNECTION_ON_SERVER_CLOSE }
)

const onServerConnect = () => (
  { type: ActionTypes.CONNECTION_ON_SERVER_CONNECT }
)

const onServerMessage = message => (
  { type: ActionTypes.CONNECTION_ON_SERVER_MESSAGE, payload: { message } }
)

const sendRemoteTap = index => (
  { type: ActionTypes.SEND_REMOTE_TAP, payload: { index } }
)

export default {
  multiplayerConnect,
  onServerClose,
  onServerConnect,
  onServerMessage,
  sendRemoteTap
}
