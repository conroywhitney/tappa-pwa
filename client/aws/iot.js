import awsIot from 'aws-iot-device-sdk'

// eslint-disable-next-line no-console
const logger = () => null // (...message) => console.log('AWS IoT', ...message)

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
      accessKeyId: awsAccessKey,
      host: iotEndpoint,
      port: 443,
      protocol: 'wss',
      region,
      secretKey: awsSecretAccessKey,
      sessionToken
    })

    const handleClose = () => {
      logger('handleClose')

      onClose()
    }

    const handleConnect = () => {
      logger('handleConnect')

      IoT.client.subscribe(IoT.iotTopic)
      onConnect()
    }

    const handleMessage = (listenedTopic, message) => {
      logger(
        'handleMessage',
        'listenedTopic', listenedTopic,
        'message', message
      )

      onMessage(message)
    }

    IoT.client.on('connect', handleConnect)
    IoT.client.on('message', handleMessage)
    IoT.client.on('close', handleClose)
  },

  disconnect: () => {
    logger(
      'disconnect'
    )

    IoT.client.end()
  },

  send: message => {
    logger(
      'send',
      'iotTopic', IoT.iotTopic,
      'message', message
    )

    logger(IoT.client)

    IoT.client.publish(IoT.iotTopic, message)
  }
}

export default IoT
