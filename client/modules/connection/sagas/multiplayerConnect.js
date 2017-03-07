import { partial } from 'ramda'
import { call, select } from 'redux-saga/effects'

import ActionTypes from '../reducer/action_types'
import ConnectionActions from '../reducer/action_creators'

import IoT from '../../../aws/iot'

const awsKeysEndpoint = state => {
  const { apiGatewayUrl, iotKeysPath } = state.connection.aws

  return `${apiGatewayUrl}/${iotKeysPath}`
}

const fetchIoTCredentials = keysUrl =>
  fetch(keysUrl).then(response => response.json())

const connectIoT = credentials => {
  const topic = 'games/1234'
  const handlers = {
    onClose: () => ConnectionActions.onServerClose(),
    onConnect: () => ConnectionActions.onServerConnect(),
    onMessage: message => ConnectionActions.onServerMessage(message)
  }

  IoT.connect({ credentials, topic, handlers })
}

/* eslint-disable no-console */
/* eslint-disable max-len */
export function* multiplayerConnect() {
  console.log('MultiplayerSagas', 'multiplayerConnect')

  const iotKeysEndpoint = yield select(awsKeysEndpoint)

  console.log('MultiplayerSagas', 'multiplayerConnect', 'iotKeysEndpoint', iotKeysEndpoint)

  const iotCredentials = yield call(partial(fetchIoTCredentials, [iotKeysEndpoint]))

  console.log('MultiplayerSagas', 'multiplayerConnect', 'iotCredentials', iotCredentials)

  yield call(connectIoT(iotCredentials))

  console.log('MultiplayerSagas', 'multiplayerConnect', 'connected')

  IoT.send('Hello, world!')

  console.log('MultiplayerSagas', 'multiplayerConnect', 'message sent')

  console.log('MultiplayerSagas', 'multiplayerConnect', 'complete')
}
/* eslint-enable no-console */
/* eslint-enable max-len */

export default {
  action: ActionTypes.MULTIPLAYER_CONNECT,
  handler: multiplayerConnect
}
