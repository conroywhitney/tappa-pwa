// @flow

import { pick } from 'ramda'
import { connect } from 'react-redux'

import Game from './index'
import { GameActions } from '../../'
import { MODES } from '../../../../constants'

const mapStateToProps = state => ({
  ...pick(['board', 'countdown', 'lives', 'status'], state.game),
  mode: MODES.multiplayer
})

const mapDispatchToProps = dispatch => ({
  resetGame: () => dispatch(GameActions.reset())
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
