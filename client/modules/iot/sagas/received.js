import { path } from 'ramda'
import { put, select } from 'redux-saga/effects'

import ActionTypes from '../reducer/action_types'
import { GameActions, GameActionTypes } from '../../game'

// eslint-disable-next-line no-console
// eslint-disable-next-line max-len
const logger = () => null // (...message) => console.log('iotReceived saga', ...message)

const lookupPlayerId = path(['game', 'playerId'])

export function* iotReceived(action) {
  const { payload } = action
  const parsedAction = JSON.parse(payload.toString())

  logger('parsedAction', parsedAction)

  if (parsedAction.type === GameActionTypes.TAP) {
    const { index, playerId } = parsedAction.payload
    const myPlayerId = yield select(lookupPlayerId)

    if (playerId !== myPlayerId) {
      yield put(GameActions.playOpponent(index))
    }
  }
}

export default {
  action: ActionTypes.IOT_RECEIVED,
  handler: iotReceived
}
