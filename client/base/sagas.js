import { partial } from 'ramda'
import { takeEvery, takeLatest } from 'redux-saga/effects'

import { IoTSagas } from '../modules/iot'
import { GameSagas } from '../modules/game'

export default function* root(dispatch) {
  yield [
    takeEvery(GameSagas.tap.action, GameSagas.tap.handler),
    takeLatest(
      IoTSagas.iotConnect.action,
      partial(IoTSagas.iotConnect.handler, [dispatch])
    ),
    takeLatest(IoTSagas.iotDisconnect.action, IoTSagas.iotDisconnect.handler),
    takeEvery(IoTSagas.iotReceived.action, IoTSagas.iotReceived.handler),
    takeEvery(IoTSagas.iotSend.action, IoTSagas.iotSend.handler)
  ]
}
