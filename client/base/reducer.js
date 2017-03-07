import { combineReducers } from 'redux'

import { reducer as appReducer } from '../modules/app'
import { ConnectionReducer } from '../modules/connection'
import { GameReducer } from '../modules/game'
import apolloClient from './apolloClient'

export default combineReducers({
  app: appReducer,
  connection: ConnectionReducer,
  game: GameReducer,
  apollo: apolloClient.reducer()
})
