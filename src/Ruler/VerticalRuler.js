import React from 'react'

export default class VerticalRuler extends React.Component {

  genVerticalBars = () => {
    const bars = []
    const v_count = (this.props.height + 1) / 100

    let k

    for (let i = 0; i < v_count; i++) {
      k = i * 100
      bars.push(<li key={i} style={{ top: k }}>{k}</li>)
    }

    return bars
  }
  render() {
    return (
      <div id='vertical-ruler' className='ruler' style={{ height: this.props.height - 20 }}>
        <b className={`marker v-marker ${this.props.mouse.y - 20 < 0 ? 'hidden' : ''}`} style={{ top: this.props.mouse.y - 20, width: this.props.mouse.x }}>{`x:${this.props.mouse.x - 20} y:${this.props.mouse.y - 20}`}</b>
        <ul>
          {this.genVerticalBars()}

        </ul>
      </div>
    )
  }
}