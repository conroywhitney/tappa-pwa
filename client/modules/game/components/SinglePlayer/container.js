// @flow

import { connect } from 'react-redux'

import SinglePlayer from './index'
import { GameActions } from '../../'

const mapStateToProps = null

function mapDispatchToProps(dispatch, ownProps) {
  const { playerId } = ownProps

  return {
    handleTap: index => dispatch(GameActions.tap({ index, playerId }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePlayer)
