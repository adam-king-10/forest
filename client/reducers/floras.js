import { SET_FLORAS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLORAS:
      return action.floras
    default:
      return state
  }
}

export default reducer
