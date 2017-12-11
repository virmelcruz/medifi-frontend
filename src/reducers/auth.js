'use strict'

import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
} from '../actions/action-types'

const initialState = {
  token: null,
  loading: false,
  errorMessage: null
}

export default (state = initialState, action) => {
  switch (action.type) {
  case LOGIN_USER_START:
    return {
      ...state,
      loading: true,
      errorMessage: null,
      token: null
    }
  case LOGIN_USER_SUCCESS:
    return {
      ...state,
      loading: false,
      token: action.token,
      errorMessage: null
    }
  case LOGIN_USER_FAILED:
    return {
      ...state,
      loading: false,
      token: null,
      errorMessage: action.message
    }
  default:
    return state
  }
}
