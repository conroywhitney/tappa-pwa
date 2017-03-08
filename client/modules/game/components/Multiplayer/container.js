// @flow

import { connect } from 'react-redux'
import { pick } from 'ramda'

import Multiplayer from './index'
import { GameActions } from '../../'
import { IoTActions } from '../../../iot'

const mapStateToProps = state => pick(['opponent'], state.game)

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
