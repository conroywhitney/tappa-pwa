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

const sendMessage = message => IoT.send(message)

export function* multiplayerConnect() {
  const iotKeysEndpoint = yield select(awsKeysEndpoint)
  const iotCredentials =
    yield call(partial(fetchIoTCredentials, [iotKeysEndpoint]))

  yield call(partial(connectIoT, [iotCredentials]))
  yield call(partial(sendMessage, ['Hello, world!']))
}

export default {
  action: ActionTypes.MULTIPLAYER_CONNECT,
  handler: multiplayerConnect
}
