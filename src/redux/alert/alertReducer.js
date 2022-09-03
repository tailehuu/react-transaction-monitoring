import {
  FETCH_ALERTS_REQUEST,
  FETCH_ALERTS_SUCCESS,
  FETCH_ALERTS_FAILURE
} from './alertTypes'

const initialState = {
  loading: false,
  users: [],
  error: ''
}

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALERTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_ALERTS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    case FETCH_ALERTS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default alertReducer