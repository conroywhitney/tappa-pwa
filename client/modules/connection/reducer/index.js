import { always, evolve } from 'ramda'
import { createReducer } from 'zeal-redux-utils'

import ActionTypes from './action_types'

import { SERVER_STATUS } from '../../../constants'

export const INITIAL_STATE = {
  aws: {
    apiGatewayUrl: 'https://7e6snyl76g.execute-api.us-east-1.amazonaws.com/dev',
    iotKeysPath: 'iot/keys'
  },
  server: {
    status: SERVER_STATUS.disconnected
  }
}

const onServerClose = (connectionState: Object) => evolve({
  server: {
    status: always(SERVER_STATUS.disconnected)
  }
})(connectionState)

const onServerConnect = (connectionState: Object) => evolve({
  server: {
    status: always(SERVER_STATUS.connected)
  }
})(connectionState)

const onServerMessage = (connectionState: Object, { payload: { _message } }) =>
  connectionState

const multiplayerConnect = (connectionState: Object) => evolve({
  server: {
    status: always(SERVER_STATUS.connecting)
  }
})(connectionState)

export default createReducer(INITIAL_STATE, {
  [ActionTypes.CONNECTION_ON_SERVER_CLOSE]: onServerClose,
  [ActionTypes.CONNECTION_ON_SERVER_CONNECT]: onServerConnect,
  [ActionTypes.CONNECTION_ON_SERVER_MESSAGE]: onServerMessage,
  [ActionTypes.MULTIPLAYER_CONNECT]: multiplayerConnect
})
