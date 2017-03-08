import { always, evolve } from 'ramda'
import { createReducer } from 'zeal-redux-utils'

import ActionTypes from './action_types'
import GameActionTypes from '../../game/reducer/action_types'

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

const onServerClose = (connectionState: Object) => {
  console.log('connection reducer', 'onServerClose')

  return evolve({
    server: {
      status: always(SERVER_STATUS.disconnected)
    }
  })(connectionState)
}

const onServerConnect = (connectionState: Object) => {
  console.log('connection reducer', 'onServerConnect')

  return evolve({
    server: {
      status: always(SERVER_STATUS.connected)
    }
  })(connectionState)
}

const onServerMessage = (connectionState: Object, payload: Object) => {
  const { message } = payload

  console.log('connection reducer', 'onServerMessage', 'message', message)

  return connectionState
}

const multiplayerConnect = (connectionState: Object) => {
  console.log('connection reducer', 'multiplayerConnect')

  return evolve({
    server: {
      status: always(SERVER_STATUS.connecting)
    }
  })(connectionState)
}

const remoteAction = (connectionState, action, payload) => {
  // eslint-disable-next-line no-console
  console.log(
    'MultiplayerRedux',
    'remoteAction',
    'action',
    action,
    'payload',
    payload
  )

  return connectionState
}

const sendRemoteTap = (connectionState: Object, { payload: { index } }) =>
  remoteAction(connectionState, GameActionTypes.TAP, { index })

export default createReducer(INITIAL_STATE, {
  [ActionTypes.CONNECTION_ON_SERVER_CLOSE]: onServerClose,
  [ActionTypes.CONNECTION_ON_SERVER_CONNECT]: onServerConnect,
  [ActionTypes.CONNECTION_ON_SERVER_MESSAGE]: onServerMessage,
  [ActionTypes.MULTIPLAYER_CONNECT]: multiplayerConnect,
  [ActionTypes.SEND_REMOTE_TAP]: sendRemoteTap
})
