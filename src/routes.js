import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home/container'
import Questions from './Questions/container'
import Results from './Results/container'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/questions/:id' component={Questions}/>
    <Route path='/results/' component={Results}/>
    <Route path='/*' component={Home}/>
  </Switch>
)

export default Routes
