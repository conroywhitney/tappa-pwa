import { combineReducers } from 'redux'

import { reducer as appReducer } from '../modules/app'
import { IoTReducer } from '../modules/iot'
import { GameReducer } from '../modules/game'
import apolloClient from './apolloClient'

export default combineReducers({
  app: appReducer,
  iot: IoTReducer,
  game: GameReducer,
  apollo: apolloClient.reducer()
})
