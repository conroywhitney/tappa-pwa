import { path } from 'ramda'
import { put, select } from 'redux-saga/effects'

import ActionTypes from '../reducer/action_types'
import { GameActions, GameActionTypes } from '../../game'

const lookupPlayerId = path(['app', 'playerId'])

export function* iotReceived(action) {
  const { payload } = action
  const parsedAction = JSON.parse(payload.toString())
  const { index, playerId } = parsedAction.payload
  const myPlayerId = yield select(lookupPlayerId)

  if (playerId !== myPlayerId) return

  if (parsedAction.type === GameActionTypes.PLAY_OPPONENT) {
    yield put(GameActions.playOpponent(index))
  }
}

export default {
  action: ActionTypes.IOT_RECEIVED,
  handler: iotReceived
}
