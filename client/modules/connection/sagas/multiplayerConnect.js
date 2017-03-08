import { partial } from 'ramda'
import { call, select } from 'redux-saga/effects'

import ActionTypes from '../reducer/action_types'
import ConnectionActions from '../reducer/action_creators'

import IoT from '../../../aws/iot'

const awsKeysEndpoint = state => {
  const { apiGatewayUrl, iotKeysPath } = state.connection.aws

  return `${apiGatewayUrl}/${iotKeysPath}`
}

const iotCredentials = keysUrl =>
  fetch(keysUrl).then(response => response.json())

export function* multiplayerConnect(dispatch) {
  const iotKeysEndpoint = yield select(awsKeysEndpoint)
  const credentials = yield call(partial(iotCredentials, [iotKeysEndpoint]))
  const topic = 'games/1234'
  const handlers = {
    onClose: () => dispatch(ConnectionActions.onServerClose()),
    onConnect: () => dispatch(ConnectionActions.onServerConnect()),
    onMessage: message => dispatch(ConnectionActions.onServerMessage(message))
  }

  IoT.connect({ credentials, topic, handlers })
}

export default {
  action: ActionTypes.MULTIPLAYER_CONNECT,
  handler: multiplayerConnect
}
