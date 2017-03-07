// @flow

import { connect } from 'react-redux'

import SinglePlayer from './index'
import { GameActions } from '../../'

const mapStateToProps = null

const mapDispatchToProps = dispatch => ({
  handleTap: index => dispatch(GameActions.tap(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(SinglePlayer)
