import { call } from 'redux-saga/effects'

import ActionTypes from '../reducer/action_types'

import IoT from '../../../aws/iot'

// eslint-disable-next-line no-console
// eslint-disable-next-line max-len
const logger = () => null // (...message) => console.log('IoT connect saga', ...message)

export function* iotDisconnect() {
  logger('disconnecting')

  yield call(() => IoT.disconnect())

  logger('disconnected')
}

export default {
  action: ActionTypes.IOT_DISCONNECT,
  handler: iotDisconnect
}
