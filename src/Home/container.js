// @flow

import { connect } from 'react-redux'
import homeComponent from './component'

const mapStateToProps = (state: Object) : Object => {
  return {
    redux: state.redux
  }
}


const Container = connect(mapStateToProps)(homeComponent)

export default Container
