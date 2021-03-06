// @flow
import React, {Component} from 'react'
import Button from 'react-toolbox/lib/button'
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import './style.scss'


type Props = {
  redux: Object,
};

class Home extends Component<Props> {
  constructor (props: Object) {
    super(props)
  }

  render () {

    const {responsed, error} = this.props.redux

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
        <Loader text='Loading data ...' />
      )
    }
  }
}

export default Home
