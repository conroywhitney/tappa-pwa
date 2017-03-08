// @flow

import { connect } from 'react-redux'

import Multiplayer from './index'
import { GameActions } from '../../'
import { IoTActions } from '../../../iot'

import { SERVER_STATUS } from '../../../../constants'

const mapStateToProps = state => ({
  connected: state.iot.status === SERVER_STATUS.connected
})

const mapDispatchToProps = dispatch => ({
  multiplayerConnect: () => dispatch(IoTActions.iotConnect()),
  startGame: () => dispatch(IoTActions.iotSend(GameActions.tap(123))),
  handleTap: index => {
    const tapAction = GameActions.tap(index)

    dispatch(tapAction)
    dispatch(IoTActions.iotSend(tapAction))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Multiplayer)
