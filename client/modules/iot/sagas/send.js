import { call } from 'redux-saga/effects'

import ActionTypes from '../reducer/action_types'

import IoT from '../../../aws/iot'

  // eslint-disable-next-line no-console
const logger = (...message) => console.log('iotSend saga', ...message)

export function* iotSend(action) {
  const { payload } = action
  const { index } = payload
  const topic = 'games/1234'

  logger(
    'topic', topic,
    'action', action,
    'payload', payload,
    'index', index
  )

  yield call(() => IoT.send('Hello, World!'))
}

export default {
  action: ActionTypes.IOT_SEND,
  handler: iotSend
}
