import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createSagaMiddleware from 'redux-saga'

import apolloClient from './apolloClient'
import reducer from './reducer'
import sagas from './sagas'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(...[
        apolloClient.middleware(),
        sagaMiddleware
      ])
    )
  )

  sagaMiddleware.run(sagas)

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      // eslint-disable-next-line global-require
      const nextReducer = require('./reducer').default

      store.replaceReducer(nextReducer)
    })
  }

  return store
}
