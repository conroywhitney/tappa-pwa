// @flow

import { connect } from 'react-redux'
import { pick } from 'ramda'

import Multiplayer from './index'
import { GameActions } from '../../'

const mapStateToProps = state => pick(['opponent'], state.game)

const mapDispatchToProps = dispatch => ({
  multiplayerConnect: () => dispatch(GameActions.multiplayerConnect()),
  handleTap: index => {
    dispatch(GameActions.tap(index))
    dispatch(GameActions.sendRemoteTap(index))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Multiplayer)
