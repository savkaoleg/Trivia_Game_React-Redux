import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './index.scss'

class Loader extends Component {
  constructor (props) {
    super(props)
  }

  render (){
    return (
      <div className="showbox">
        <div className="loader">
          <svg className="circular" viewBox="25 25 50 50">
            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
          </svg>
        </div>
        <h3 className="loader-title">{this.props.text}</h3>
      </div>
    )
  }
}

Loader.propTypes = {
  text: PropTypes.string
}

export default Loader
