// @flow
import { connect } from 'react-redux'
import resultsComponent from './component'
import { clearAnsvers } from '../redux/actions'

const mapStateToProps = (state: Object) : Object => {
  return {
    redux: state.redux
  }
}

const mapDispatchToProps = (dispatch: Function) : Object =>
  ({
    clearAnsvers (): void{
      dispatch(clearAnsvers(this))
    }
  })

const Container = connect(mapStateToProps, mapDispatchToProps)(resultsComponent)

export default Container
