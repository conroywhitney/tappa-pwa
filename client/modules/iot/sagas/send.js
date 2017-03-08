import { partial } from 'ramda'
import { call } from 'redux-saga/effects'

import ActionTypes from '../reducer/action_types'

import IoT from '../../../aws/iot'

// eslint-disable-next-line no-console
// eslint-disable-next-line max-len
const logger = () => null // (...message) => console.log('iotSend saga', ...message)

const sendRemoteAction = (topic, remoteAction) =>
  IoT.send(JSON.stringify(remoteAction))

export function* iotSend(action) {
  const { payload: remoteAction } = action
  const topic = 'games/1234'

  logger(
    'topic', topic,
    'remoteAction', remoteAction
  )

  yield call(partial(sendRemoteAction, [topic, remoteAction]))
}

export default {
  action: ActionTypes.IOT_SEND,
  handler: iotSend
}
