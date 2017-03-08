// @flow

import { connect } from 'react-redux'
import { pick } from 'ramda'

import Multiplayer from './index'
import { GameActions } from '../../'
import { ConnectionActions } from '../../../connection'

const mapStateToProps = state => pick(['opponent'], state.game)

const mapDispatchToProps = dispatch => ({
  multiplayerConnect: () => dispatch(ConnectionActions.multiplayerConnect()),
  startGame: () => dispatch(ConnectionActions.sendRemoteTap(1)),
  handleTap: index => {
    dispatch(GameActions.tap(index))
    dispatch(ConnectionActions.sendRemoteTap(index))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Multiplayer)
