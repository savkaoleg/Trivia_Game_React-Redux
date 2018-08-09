import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import types from '../sample/types.js'
import {loadQuestions} from '../sample/actions'


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

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
  afterClearAnsversMidelware
))(createStore)

export default function configureStore (initialState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}
