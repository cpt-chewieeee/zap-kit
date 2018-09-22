import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Ruler from './Ruler'
export default class Routes extends React.Component {
  render (){ 
    return (
      <Switch>
        <Route exact path='/' component={Ruler}/>
      </Switch>
    )
  }
}