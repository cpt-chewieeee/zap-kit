import React from 'react'

export default class HorizontalRuler extends React.Component {
  componentDidMount() {
    this.genHorizontalBars()
  }
  genHorizontalBars = () => {
    const bars = []
    const h_count = (this.props.width + 1) / 100

    let k

    for (let i = 0; i < h_count; i++) {
      k = i * 100
      bars.push(<li key={i} style={{ left: k }}>{k}</li>)
    }

    return bars
  }
  render() {

    return (
      <div id='horizontal-ruler' className='ruler' style={{ width: this.props.width - 20 }}>
        <b className='marker h-marker' style={{ left: this.props.mouse.x, height: this.props.mouse.y }} />
        <ul>
          {this.genHorizontalBars()}
        </ul>
      </div>
    )
  }
}