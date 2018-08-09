import {loadQuestions} from '../sample/actions'

export default function bootstrap ({ dispatch }) {
  return () => {
     dispatch(loadQuestions())
  }
}
