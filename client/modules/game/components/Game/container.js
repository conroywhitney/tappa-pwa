// @flow

import { pick } from 'ramda'
import { connect } from 'react-redux'

import Game from './index'
import { GameActions } from '../../'

const mapStateToProps = state => ({
  ...pick([
    'board',
    'countdown',
    'lives',
    'mode',
    'playerId',
    'status'
  ], state.game)
})

const mapDispatchToProps = dispatch => ({
  resetGame: () => dispatch(GameActions.reset())
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
