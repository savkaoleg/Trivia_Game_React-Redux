// @flow
import { connect } from 'react-redux'
import questionComponent from './component'
import { setAnsver } from '../redux/actions'

const mapStateToProps = (state: Object) : Object => {
  return {
    redux: state.redux
  }
}

const mapDispatchToProps = (dispatch: Function) : Object =>
  ({
    setAnsver (id: number, ansver: string): void{
      dispatch(setAnsver(id, ansver))
    }
  })

const Container = connect(mapStateToProps, mapDispatchToProps)(questionComponent)

export default Container
