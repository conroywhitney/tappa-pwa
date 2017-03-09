import IoTConnectSaga from './connect'
import IoTDisconnectSaga from './disconnect'
import IoTReceivedSaga from './received'
import IoTSendSaga from './send'

export default {
  iotConnect: IoTConnectSaga,
  iotDisconnect: IoTDisconnectSaga,
  iotReceived: IoTReceivedSaga,
  iotSend: IoTSendSaga
}
