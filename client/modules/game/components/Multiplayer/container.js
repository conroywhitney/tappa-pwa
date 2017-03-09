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
      const tapAction = GameActions.tap({ index, playerId })

      dispatch(tapAction)
      dispatch(IoTActions.iotSend(tapAction))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Multiplayer)
