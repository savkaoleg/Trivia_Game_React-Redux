// @flow

import types from './types.js'

export function setQuestions (questions: string) : Object {
  return {
    type: types.SET_QUESTIONS,
    questions
  }
}

export function setAnsver (id: number, ansver: string) : Object {
  return {
    type: types.SET_ANSVER,
    id,
    ansver
  }
}

export function clearAnsvers (push: Function) : Object {
  return {
    type: types.CLEAR_ANSVERS,
    push
  }
}

export function setError (error: string) : Object {
  console.log('error', error)
  return {
    type: types.SET_ERROR,
    error
  }

}


export function loadQuestions () {
  return async (dispatch: Function) => {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      const result = await response.json()

      if (result.results.length){
        dispatch(setQuestions(result.results))
      } else {
        dispatch(setError('Something wrong'))
      }
    } catch (e) {
        dispatch(setError(e.message))
    }
  }
}
