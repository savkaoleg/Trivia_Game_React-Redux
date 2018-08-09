import { connect } from 'react-redux'
import questionComponent from './component'
import { setAnsver } from '../sample/actions'

const mapStateToProps = (state) => {
  return {
    sample: state.sample
  }
}

const mapDispatchToProps = dispatch =>
  ({
    setAnsver (id, ansver){
      dispatch(setAnsver(id, ansver))
    }
  })

const Container = connect(mapStateToProps, mapDispatchToProps)(questionComponent)

export default Container
