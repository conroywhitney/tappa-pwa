import { takeEvery, takeLatest } from 'redux-saga/effects'

import { ConnectionSagas } from '../modules/connection'
import { GameSagas } from '../modules/game'

export default function* root() {
  yield [
    takeEvery(
      GameSagas.tap.action,
      GameSagas.tap.handler
    ),
    takeLatest(
      ConnectionSagas.multiplayerConnect.action,
      ConnectionSagas.multiplayerConnect.handler
    )
  ]
}
