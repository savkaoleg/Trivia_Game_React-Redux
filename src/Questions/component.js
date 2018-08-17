// @flow
import React, {Component} from 'react'
import Button from 'react-toolbox/lib/button'
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card'
import htmlDecode from '../hooks/htmlDecode'
import './style.scss'

type Props = {
  ansver: String,
  history: Function,
  history: Object,
  match: Object,
  redux: Object,
  setAnsver: Function
};

class Questions extends Component<Props> {
  constructor (props: Object) {
    super(props)
  }

  submitAnsverTrue (){
    this.submitAnsver('True')
  }

  submitAnsverFalse (){
    this.submitAnsver('False')
  }

  submitAnsver (ansver: string){
    let id = this.props.match.params.id
    this.props.setAnsver(id - 1, ansver)
    if (parseInt(id) === 10){
      this.props.history.push('/results/')
    } else {
      this.props.history.push(`/questions/${++id}`)
    }
  }

  render () {
    if (this.props.redux.questions.length){
    let id = this.props.match.params.id
    --id
      return (
        <Card className='card'>
          <CardTitle
            className='title'
            title={this.props.redux.questions[id].category}
          />
          <CardText className='cardText'>
             {htmlDecode(this.props.redux.questions[id].question)}
          </CardText>
          <CardText>
            <Button
              onClick={this.submitAnsverFalse.bind(this)}
              label="False"
              raised primary
              className='falseBtn'/>
            <Button
              onClick={this.submitAnsverTrue.bind(this)}
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


export default Questions
