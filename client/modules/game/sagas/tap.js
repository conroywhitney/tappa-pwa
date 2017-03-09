import { path } from 'ramda'
import { call, put, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import ActionTypes from '../reducer/action_types'
import GameActions from '../reducer/action_creators'

import { DIFFICULTY, MODES } from '../../../constants'
import { getRandomInt } from '../../../utils'

const lookupGameMode = path(['app', 'mode'])

export function* tap({ payload: { index } }) {
  const opponentSpeed = getRandomInt(DIFFICULTY.min, DIFFICULTY.max)
  const gameMode = yield select(lookupGameMode)

  yield call(delay, opponentSpeed)

  if (gameMode === MODES.singlePlayer) {
    yield put(GameActions.playOpponent(index))
  }
}

export default {
  action: ActionTypes.PLAY_PLAYER,
  handler: tap
}
