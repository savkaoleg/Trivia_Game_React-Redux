import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Button from 'react-toolbox/lib/button'
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card'
import htmlDecode from '../hooks/htmlDecode'
import './style.scss'


class Questions extends Component {
  constructor (props) {
    super(props)
  }

  submitAnsver (ansver){
    let id = this.props.match.params.id
    this.props.setAnsver(id - 1, ansver)
    if (parseInt(id) === 10){
      this.props.history.push('/results/')
    } else {
      this.props.history.push(`/questions/${++id}`)
    }
  }

  render () {
    if (this.props.sample.questions.length){
    let id = this.props.match.params.id
    --id
      return (
        <Card className='card'>
          <CardTitle
            className='title'
            title={this.props.sample.questions[id].category}
          />
          <CardText className='cardText'>
             {htmlDecode(this.props.sample.questions[id].question)}
          </CardText>
          <CardText>
            <Button
              onClick={this.submitAnsver.bind(this, 'False')}
              label="False"
              raised primary
              className='falseBtn'/>
            <Button
              onClick={this.submitAnsver.bind(this, 'True')}
              label="True"
              raised primary
              className='trueBtn'/>
          </CardText>
          <CardText>
            {++id} of 10
          </CardText>
        </Card>
      )
    } else {
      return (
        <Card className='card'>
          <CardText>
            Loading questions ...
          </CardText>
        </Card>
      )
    }
  }
}

Questions.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  sample: PropTypes.object,
  setAnsver: PropTypes.func
}

export default Questions
