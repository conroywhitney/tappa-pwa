// @flow

import { pick } from 'ramda'
import { connect } from 'react-redux'

import Game from './index'
import { GameActions } from '../../'

const mapStateToProps = state =>
  pick(['board', 'countdown', 'lives', 'status'], state.game)

const mapDispatchToProps = dispatch => ({
  handleTap: index => dispatch(GameActions.tap(index)),
  resetGame: () => dispatch(GameActions.reset)
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
