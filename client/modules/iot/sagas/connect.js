import { path, partial } from 'ramda'
import { call, select } from 'redux-saga/effects'

import ActionTypes from '../reducer/action_types'
import IoTActions from '../reducer/action_creators'

import IoT from '../../../aws/iot'

// eslint-disable-next-line no-console
// eslint-disable-next-line max-len
const logger = () => null // (...message) => console.log('IoT connect saga', ...message)

const iotKeysUrl = path(['iot', 'keysUrl'])

const iotCredentials = keysUrl =>
  fetch(keysUrl).then(response => response.json())

export function* iotConnect(dispatch) {
  const iotKeysEndpoint = yield select(iotKeysUrl)

  logger('iotKeysEndpoint', iotKeysEndpoint)

  const credentials = yield call(partial(iotCredentials, [iotKeysEndpoint]))

  logger('credentials', credentials)

  const topic = 'games/1234'

  const handlers = {
    onClose: () => {
      logger('onClose')
      dispatch(IoTActions.iotClosed())
    },
    onConnect: () => {
      logger('onConnect')
      dispatch(IoTActions.iotConnected())
    },
    onMessage: message => {
      logger('onMessage')
      dispatch(IoTActions.iotReceived(message))
    }
  }

  logger('connecting')

  IoT.connect({ credentials, topic, handlers })

  logger('connected')
}

export default {
  action: ActionTypes.IOT_CONNECT,
  handler: iotConnect
}
