// @flow
import {loadQuestions} from '../redux/actions'

export default function bootstrap (store: Object) {
  return () => {
     store.dispatch(loadQuestions())
  }
}
