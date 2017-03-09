// @flow

import { pick } from 'ramda'
import { connect } from 'react-redux'

import { AppActions } from '../../'
import { GameActions } from '../../../game'

import App from './index'

const mapStateToProps = state => ({
  ...pick(['mode'], state.app)
})

const mapDispatchToProps = dispatch => ({
  switchMode: mode => {
    dispatch(AppActions.switchMode(mode))
    dispatch(GameActions.reset())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
