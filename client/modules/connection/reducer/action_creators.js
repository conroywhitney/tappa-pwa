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

export default {
  multiplayerConnect,
  onServerClose,
  onServerConnect,
  onServerMessage
}
