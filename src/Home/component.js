import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Button from 'react-toolbox/lib/button'
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import './style.scss'

class Home extends Component {
  constructor (props) {
    super(props)
  }

  render () {

    const {responsed, error} = this.props.sample

    if (responsed){
      if (!error){
        return (
          <Card className='card'>
            <CardTitle
              title="Welcome to the Trivia Challenge"
            />
            <CardText className='cardText'>
              You will be presented with 10 True or False questions.<br/><br/> Can you score 100%?
            </CardText>
            <CardText>
              <Link to='/questions/1'>
                <Button
                  label="Begin"
                  raised primary
                />
              </Link>
            </CardText>
          </Card>
        )
      } else {
        return (
          <Card className='card'>
            <CardText className='cardText'>
              {error}
            </CardText>
          </Card>
        )
      }
    } else {
      return (
        <Loader text="Loading data ..."/>
      )
    }
  }
}

Home.propTypes = {
  sample: PropTypes.object
}

export default Home
