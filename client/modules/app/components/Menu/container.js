// @flow

import { pick } from 'ramda'
import { connect } from 'react-redux'

import { GameActions } from '../../../game'

import Menu from './index'

const mapStateToProps = state => ({
  ...pick(['mode'], state.game)
})

const mapDispatchToProps = dispatch => ({
  onSelect: mode => dispatch(GameActions.switchMode(mode))
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
