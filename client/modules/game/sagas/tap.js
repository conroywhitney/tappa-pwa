import { path } from 'ramda'
import { call, put, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import ActionTypes from '../reducer/action_types'
import GameActions from '../reducer/action_creators'

import { DIFFICULTY, MODES } from '../../../constants'
import { getRandomInt } from '../../../utils'

const lookupGameId = path(['game', 'gameId'])
const lookupGameMode = path(['app', 'mode'])

export function* tap({ payload: { index } }) {
  const opponentSpeed = getRandomInt(DIFFICULTY.min, DIFFICULTY.max)
  const gameMode = yield select(lookupGameMode)
  const originalGameId = yield select(lookupGameId)

  if (gameMode === MODES.singlePlayer) {
    yield call(delay, opponentSpeed)
    const currentGameId = yield select(lookupGameId)

    if (currentGameId === originalGameId) {
      yield put(GameActions.playOpponent(index))
    }
  }
}

export default {
  action: ActionTypes.PLAY_PLAYER,
  handler: tap
}
