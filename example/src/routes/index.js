import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RulerWithView from './RulerWithView'
import Ruler from './Ruler'
export default class Routes extends React.Component {
  render (){ 
    return (
      <Switch>
        <Route exact path='/' component={Ruler}/>
        <Route path='/ruler-viewer' component={RulerWithView} />
      </Switch>
    )
  }
}