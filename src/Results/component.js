// @flow
import React, {Component} from 'react'
import Button from 'react-toolbox/lib/button'
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card'
import FontIcon from 'react-toolbox/lib/font_icon'
import htmlDecode from '../hooks/htmlDecode'
import './style.scss'

type Props = {
  clearAnsvers: Function,
  history: Function,
  redux: Object
};

type State = {
  compareArr: Array<boolean>,
  total: Number
};

class Home extends Component<Props, State> {
  constructor (props: Object) {
    super(props)

    const { questions, ansvers } = this.props.redux

    const compareArr = questions.map((it, index)=>{
      return (ansvers[index] === String(it.incorrect_answers))
    })

    const total = compareArr.reduce((sum, it) => sum + it, 0)

    this.state = {
      compareArr,
      total
    }
  }

  render () {
    const { questions } = this.props.redux
    return (
      <Card className='card'>
        <CardTitle className='title'
          title="You scored"
          subtitle= {` ${String(this.state.total)} /10`}
        />
        <CardText className='cardText'>
          {questions.map((it, index)=>{
            const done = this.state.compareArr[index]
            return (
              <div key={index} className='questionResult'>
                <p>
                  <FontIcon
                    style={{ color: done ? '#4CAF50' : '#F44336'}}
                    value= {done ? 'done' : 'clear'}
                  />{htmlDecode(it.question)}</p>
              </div>
            )
          })}
        </CardText>
        <CardText>
          <Button
            onClick={this.props.clearAnsvers.bind(this.props.history.push)}
            label="PLAY AGAIN?"
            raised primary />
        </CardText>
      </Card>
    )
  }
}

export default Home
