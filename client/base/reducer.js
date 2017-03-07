import { combineReducers } from 'redux'

import { reducer as appReducer } from '../modules/app'
import { GameReducer } from '../modules/game'
import apolloClient from './apolloClient'

export default combineReducers({
  app: appReducer,
  game: GameReducer,
  apollo: apolloClient.reducer()
})
