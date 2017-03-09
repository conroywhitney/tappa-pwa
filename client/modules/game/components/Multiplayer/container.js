// @flow

import { connect } from 'react-redux'

import Multiplayer from './index'
import { GameActions } from '../../'
import { IoTActions } from '../../../iot'

import { SERVER_STATUS } from '../../../../constants'

const mapStateToProps = state => ({
  connected: state.iot.status === SERVER_STATUS.connected
})

function mapDispatchToProps(dispatch, ownProps) {
  const { playerId } = ownProps

  return {
    multiplayerConnect: () => dispatch(IoTActions.iotConnect()),
    multiplayerDisconnect: () => dispatch(IoTActions.iotDisconnect()),
    handleTap: index => {
      dispatch(GameActions.playPlayer(index))
      dispatch(IoTActions.iotSend(GameActions.playOpponent(index, playerId)))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Multiplayer)
