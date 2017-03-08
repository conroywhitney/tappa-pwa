import { partial } from 'ramda'
import { takeEvery, takeLatest } from 'redux-saga/effects'

import { ConnectionSagas } from '../modules/connection'
import { GameSagas } from '../modules/game'

export default function* root(dispatch) {
  yield [
    takeEvery(
      GameSagas.tap.action,
      GameSagas.tap.handler
    ),
    takeLatest(
      ConnectionSagas.multiplayerConnect.action,
      partial(ConnectionSagas.multiplayerConnect.handler, [dispatch])
    ),
    takeEvery(
      ConnectionSagas.sendRemoteTap.action,
      ConnectionSagas.sendRemoteTap.handler
    )
  ]
}
