import axios from 'axios'
import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
} from './action-types'

export function loginRequest (email, password) {
  return (dispatch) => {
    dispatch(loginRequestStart)

    axios.post('http://localhost:3001/graphql', {
      query: `mutation { signInUser(email: "${email}", password: "${password}") }`
    }).then(function (response) {
      if (response.data.errors == null) {
        dispatch(loginSuccess(response.data.data.signInUser))
      } else {
        console.log(response)
        dispatch(loginFailed(response.data.errors[0].message))
      }
    }).catch(function (error) {
      dispatch(loginFailed(error))
    })
  }
}

function loginRequestStart () {
  return {
    type: LOGIN_USER_START
  }
}

function loginSuccess (token) {
  return {
    type: LOGIN_USER_SUCCESS,
    token
  }
}

function loginFailed (message) {
  return {
    type: LOGIN_USER_FAILED,
    message
  }
}

