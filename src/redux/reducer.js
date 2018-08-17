// @flow

import types from './types'

const initialState = {
  responsed: false,
  error: '',
  questions: [],
  ansvers: []
}

export default function reducer (state: Object = initialState, action: Object) {
  switch (action.type) {
    case types.SET_QUESTIONS:
      return Object.assign({}, state, {
        questions: action.questions,
        responsed: true
      })
    case types.SET_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        responsed: true
      })
    case types.SET_ANSVER: {
      const newAnsvers = state.ansvers
      newAnsvers[action.id] = action.ansver
      return Object.assign({}, state, {
        ansvers: newAnsvers
      })
    }
    case types.CLEAR_ANSVERS:
      action.push('/')
      return Object.assign({}, state, {
        ansvers: []
      })
    default:
      return state
  }
}
