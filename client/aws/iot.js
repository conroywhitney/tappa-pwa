import awsIot from 'aws-iot-device-sdk'

const IoT = {
  client: null,
  iotTopic: null,
  connect: ({ credentials, topic, handlers }) => {
    const {
      iotEndpoint,
      region,
      awsAccessKey,
      awsSecretAccessKey,
      sessionToken
    } = credentials
    const { onClose, onConnect, onMessage } = handlers

    IoT.iotTopic = topic

    IoT.client = awsIot.device({
      region,
      protocol: 'wss',
      accessKeyId: awsAccessKey,
      secretKey: awsSecretAccessKey,
      sessionToken,
      port: 443,
      host: iotEndpoint,
      baseReconnectTimeMs: 20000,
      maximumReconnectTimeMs: 20000,
      minimumConnectionTimeMs: 20000,
      drainTimeMs: 10000,
      autoResubscribe: true
    })

    const handleClose = () => {
      console.log('aws iot', 'handleClose')

      onClose()
    }

    const handleConnect = () => {
      console.log('aws iot', 'handleConnect')

      IoT.client.subscribe(IoT.iotTopic)
      onConnect()
    }

    const handleMessage = (listenedTopic, message) => {
      console.log(
        'aws iot', 'handleMessage',
        'listenedTopic', listenedTopic,
        'message', message
      )

      onMessage(message)
    }

    IoT.client.on('connect', handleConnect)
    IoT.client.on('message', handleMessage)
    IoT.client.on('close', handleClose)
  },

  send: message => {
    console.log(
      'aws iot', 'send',
      'iotTopic', IoT.iotTopic,
      'message', message
    )

    console.log(IoT.client)

    IoT.client.publish(IoT.iotTopic, message)
  }
}

export default IoT
