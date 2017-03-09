import ActionTypes from './action_types'

const switchMode = mode => (
  { type: ActionTypes.SWITCH_MODE, payload: { mode } }
)

export default {
  switchMode
}
