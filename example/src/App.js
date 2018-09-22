import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import Routes from './routes'
export default class App extends Component {
  render () {
    return (
      <HashRouter>
        <Routes />
      </HashRouter>
    )
  }
}
