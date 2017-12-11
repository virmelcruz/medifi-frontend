'use strict'

import * as ACTIONS from '../actions/action-types'

const initialState = {
  profile: {},
  loading: false,
  errorMessage: null
}

export default (state = initialState, action) => {
  switch (action.type) {
  case ACTIONS.FETCH_USER_PROFILE_START:
    return {
      ...state,
      loading: true,
      errorMessage: null,
      profile: {}
    }
  case ACTIONS.FETCH_USER_PROFILE_SUCCESS:
    return {
      ...state,
      loading: false,
      profile: {
        ...state.profile,
        ...action.profile
      },
      errorMessage: null
    }
  case ACTIONS.FETCH_USER_PROFILE_FAILED:
    return {
      ...state,
      loading: false,
      profile: {},
      errorMessage: action.message
    }
  default:
    return state
  }
}
