import { path } from 'ramda'
import { put, select } from 'redux-saga/effects'

import ActionTypes from '../reducer/action_types'
import { GameActions, GameActionTypes } from '../../game'

const lookupGameId = path(['game', 'gameId'])
const lookupPlayerId = path(['app', 'playerId'])

// eslint-disable-next-line no-console
// eslint-disable-next-line max-len
const logger = () => null // (...message) => console.log('IoT connect saga', ...message)

// eslint-disable-next-line complexity
export function* iotReceived(action) {
  const { payload } = action
  const parsedAction = JSON.parse(payload.toString())
  const { gameId, index, playerId } = parsedAction.payload

  if (parsedAction.type === GameActionTypes.PLAY_REMOTE) {
    const myPlayerId = yield select(lookupPlayerId)
    const currentGameId = yield select(lookupGameId)

    logger(
      'iotReceived',
      'gameId', gameId,
      'currentGameId', currentGameId,
      'playerId', playerId,
      'myPlayerId', myPlayerId
    )

    if (playerId === myPlayerId) return

    yield put(GameActions.playOpponent(index))
  }
}

export default {
  action: ActionTypes.IOT_RECEIVED,
  handler: iotReceived
}
