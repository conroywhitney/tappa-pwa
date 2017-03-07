import { takeEvery } from 'redux-saga'

import { GameSagas } from '../modules/game'

export default function* root() {
  yield [
    takeEvery(GameSagas.tap.action, GameSagas.tap.handler)
  ]
}
