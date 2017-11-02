import { combineReducers } from 'redux'

export const initialState = {
  example: {}
}

const example = (state = initialState, action) => {
  switch (action.type) {
    case 'EXAMPLE':
      return {
        ...state,
        example: {
          someState: true
        }
      }
    default:
      return state
  }
}

export default combineReducers({
  example
})
