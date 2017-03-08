import IoTConnectSaga from './connect'
import IoTReceivedSaga from './received'
import IoTSendSaga from './send'

export default {
  iotConnect: IoTConnectSaga,
  iotReceived: IoTReceivedSaga,
  iotSend: IoTSendSaga
}
