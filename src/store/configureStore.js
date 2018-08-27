// @flow
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import types from '../redux/types.js'
import {loadQuestions} from '../redux/actions'


const loggerMiddleware = createLogger({collapsed: (state, action) => {
  if (action.type === 'CREATE_ITEM') {
    return false
  } else {
    return true
  }
}})

const afterClearAnsversMidelware = store => next => action => {
  if (action.type === types.CLEAR_ANSVERS) {
   store.dispatch(loadQuestions())
  }
  next(action)
}

let middleWares = [ thunkMiddleware, afterClearAnsversMidelware ]

const envArr = ['production', 'test']

if (!envArr.includes(process.env.NODE_ENV)) {
  middleWares = [...middleWares, loggerMiddleware]
}

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(
  ...middleWares
))(createStore)

export default function configureStore (initialState: Object) {
  return createStoreWithMiddleware(rootReducer, initialState)
}
