import awsIot from 'aws-iot-device-sdk'

let client = null
let iotTopic = null

const IoT = {
  connect: ({ credentials, topic, handlers }) => {
    const {
      iotEndpoint,
      region,
      awsAccessKey,
      awsSecretAccessKey,
      sessionToken
    } = credentials
    const { onClose, onConnect, onMessage } = handlers

    iotTopic = topic

    client = awsIot.device({
      region,
      protocol: 'wss',
      accessKeyId: awsAccessKey,
      secretKey: awsSecretAccessKey,
      sessionToken,
      port: 443,
      host: iotEndpoint
    })

    client.on('connect', onConnect)
    client.on('message', onMessage)
    client.on('close', onClose)

    client.on('close', () => onClose())
    client.on('connect', () => client.subscribe(topic) && onConnect())
    client.on('message', (listenedTopic, message) => onMessage(message))
  },

  send: message => {
    client.publish(iotTopic, message)
  }
}

export default IoT
