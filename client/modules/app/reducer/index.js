import { createReducer } from 'zeal-redux-utils'
import uuidV4 from 'uuid/v4'

import ActionTypes from './action_types'
import { MODES } from '../../../constants'

export const INITIAL_STATE = {
  playerId: uuidV4(),
  mode: MODES.singlePlayer
}

const switchMode = (appState: Object, { payload: { mode } }) => (
  { ...appState, mode }
)

export default createReducer(INITIAL_STATE, {
  [ActionTypes.SWITCH_MODE]: switchMode
})
