import { connect } from 'react-redux'
import resultsComponent from './component'
import { clearAnsvers } from '../sample/actions'

const mapStateToProps = (state) => {
  return {
    sample: state.sample
  }
}

const mapDispatchToProps = dispatch =>
  ({
    clearAnsvers (){
      dispatch(clearAnsvers(this))
    }
  })

const Container = connect(mapStateToProps, mapDispatchToProps)(resultsComponent)

export default Container
