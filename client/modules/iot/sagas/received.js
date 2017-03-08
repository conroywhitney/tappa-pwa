import { put } from 'redux-saga/effects'

import ActionTypes from '../reducer/action_types'
import { GameActions, GameActionTypes } from '../../game'

  // eslint-disable-next-line no-console
const logger = (...message) => console.log('iotReceived saga', ...message)

export function* iotReceived(action) {
  const { payload } = action
  const parsedAction = JSON.parse(payload.toString())

  logger('parsedAction', parsedAction)

  if (parsedAction.type === GameActionTypes.TAP) {
    const { index } = parsedAction.payload

    yield put(GameActions.playOpponent(index))
  }
}

export default {
  action: ActionTypes.IOT_RECEIVED,
  handler: iotReceived
}
