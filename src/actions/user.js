'use strict'

import axios from 'axios'
import * as ACTIONS from './action-types'

export function fetchUserProfile (params) {
  return (dispatch, getState) => {
    const state = getState()

    dispatch(fetchUserProfileStart)

    axios.post('http://localhost:3000/graphql', {
      query: `query { my_profile { ${params} } }`
    },
    {
      headers: {
        'Authorization': `Bearer ${state.auth.token}`
      }
    }).then(function (response) {
      if (response.data.errors == null) {
        dispatch(fetchUserProfileSuccess(response.data.data.my_profile))
      } else {
        dispatch(fetchUserProfileFailed(response.data.errors[0].message))
      }
    }).catch(function (error) {
      dispatch(fetchUserProfileFailed(error))
    })
  }
}

function fetchUserProfileStart () {
  return {
    type: ACTIONS.FETCH_USER_PROFILE_START
  }
}

function fetchUserProfileSuccess (profile) {
  return {
    type: ACTIONS.FETCH_USER_PROFILE_SUCCESS,
    profile
  }
}

function fetchUserProfileFailed (message) {
  return {
    type: ACTIONS.FETCH_USER_PROFILE_FAILED,
    message
  }
}

