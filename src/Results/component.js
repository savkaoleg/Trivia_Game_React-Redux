import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Button from 'react-toolbox/lib/button'
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card'
import FontIcon from 'react-toolbox/lib/font_icon'
import htmlDecode from '../hooks/htmlDecode'
import './style.scss'

class Home extends Component {
  constructor (props) {
    super(props)

    const { questions, ansvers } = this.props.sample

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
    const { questions } = this.props.sample
    return (
      <Card className='card'>
        <CardTitle className='title'
          title="You scored"
          subtitle={this.state.total + '/10'}
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

Home.propTypes = {
  clearAnsvers: PropTypes.func,
  history: PropTypes.object,
  sample: PropTypes.object
}

export default Home
