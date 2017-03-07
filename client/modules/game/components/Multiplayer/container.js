// @flow

import { connect } from 'react-redux'

import Multiplayer from './index'
import { GameActions } from '../../'

const mapStateToProps = null

const mapDispatchToProps = dispatch => ({
  handleTap: index => dispatch(GameActions.tap(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(Multiplayer)
