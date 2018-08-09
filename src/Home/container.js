import { connect } from 'react-redux'
import homeComponent from './component'
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

const Container = connect(mapStateToProps, mapDispatchToProps)(homeComponent)

export default Container
