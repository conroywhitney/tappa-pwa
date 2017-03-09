// @flow

import { connect } from 'react-redux'

import SinglePlayer from './index'
import { GameActions } from '../../'

const mapStateToProps = null

function mapDispatchToProps(dispatch) {
  return {
    handleTap: index => dispatch(GameActions.playPlayer(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePlayer)
