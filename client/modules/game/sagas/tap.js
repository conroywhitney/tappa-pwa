import { call, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import ActionTypes from '../reducer/action_types'
import GameActions from '../reducer/action_creators'

import { DIFFICULTY } from '../../../constants'
import { getRandomInt } from '../../../utils'

export function* tap({ payload: { index } }) {
  const opponentSpeed = getRandomInt(DIFFICULTY.min, DIFFICULTY.max)

  yield call(delay, opponentSpeed)
  yield put(GameActions.playOpponent(index))
}

export default {
  action: ActionTypes.TAP,
  handler: tap
}
