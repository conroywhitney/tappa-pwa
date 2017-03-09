import { combineReducers } from 'redux'

import { AppReducer } from '../modules/app'
import { IoTReducer } from '../modules/iot'
import { GameReducer } from '../modules/game'
import apolloClient from './apolloClient'

export default combineReducers({
  app: AppReducer,
  iot: IoTReducer,
  game: GameReducer,
  apollo: apolloClient.reducer()
})
