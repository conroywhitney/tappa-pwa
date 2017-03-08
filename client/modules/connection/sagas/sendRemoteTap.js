import { call, take } from 'redux-saga/effects'

import ActionTypes from '../reducer/action_types'

import IoT from '../../../aws/iot'

export function* sendRemoteTap(action) {
  const { payload } = action
  const { index } = payload
  const topic = 'games/1234'

  console.log('connection saga', 'sendRemoteTap', 'topic', topic, 'action', action, 'payload', payload, 'index', index)

  yield call(() => IoT.send('Hello, World!!!! ' + index))
}

export default {
  action: ActionTypes.SEND_REMOTE_TAP,
  handler: sendRemoteTap
}
