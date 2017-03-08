import { path } from 'ramda'
import { call, put, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import ActionTypes from '../reducer/action_types'
import GameActions from '../reducer/action_creators'

import { DIFFICULTY, MODES } from '../../../constants'
import { getRandomInt } from '../../../utils'

const lookupGameMode = path(['game', 'mode'])

export function* tap({ payload: { index } }) {
  const opponentSpeed = getRandomInt(DIFFICULTY.min, DIFFICULTY.max)
  const gameMode = yield select(lookupGameMode)

  if (gameMode === MODES.singlePlayer) {
    yield call(delay, opponentSpeed)
    yield put(GameActions.playOpponent(index))
  }
}

export default {
  action: ActionTypes.TAP,
  handler: tap
}
