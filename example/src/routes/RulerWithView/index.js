import React from 'react'
import { Ruler } from 'zap-kit'
import './style.css'
export default class RulerWithView extends React.Component {
  constructor(props) {
    super(props)
    this.refContainer = React.createRef()
    this.state = {
      container: null
    }
  }
  componentDidMount() {
    this.setState({
      container: this.refContainer
    })
  }
  render() {
    return (
      <div style={{
        height: '1050px',
        width: '4050px'
      }}
        ref={ref => this.refContainer = ref}
      >
        <Ruler
          refContainer={this.state.container}>

          <div className='display-panel' style={{ backgroundColor: 'red', height: '100%' }}>
            Display Content
          </div>
        </Ruler>
      </div>
    )
  }
}