import axios from 'axios'
import {
  FETCH_ALERTS_REQUEST,
  FETCH_ALERTS_SUCCESS,
  FETCH_ALERTS_FAILURE
} from './alertTypes'

const fetchAlertsRequest = () => {
  return {
    type: FETCH_ALERTS_REQUEST
  }
}

const fetchAlertsSuccess = users => {
  return {
    type: FETCH_ALERTS_SUCCESS,
    payload: users
  }
}

const fetchAlertsFailure = error => {
  return {
    type: FETCH_ALERTS_FAILURE,
    payload: error
  }
}

// async action
// thunk middleware: allow action creator to return FUNCTION instead of an action
export const fetchAlerts = () => {
  return (dispatch) => {
    dispatch(fetchAlertsRequest)

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const users = response.data

        dispatch(fetchAlertsSuccess(users))
      })
      .catch(error => {
        const errMsg = error.message

        dispatch(fetchAlertsFailure(errMsg))
      })
  }
}