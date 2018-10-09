import React from 'react'
import PropTypes from 'prop-types'
import './tools.css'
export default class Tools extends React.PureComponent {
  static propTypes = {
    toolAsset: PropTypes.string.isRequired,
    offsetLeft: PropTypes.number.isRequired,
    offsetTop: PropTypes.number.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      displayMenu: false,
      innerTop: 0,
      innerLeft: 0,
    }
  }
  handleToolsClick = (e) => {
    this.setState({ displayMenu : !this.state.displayMenu })
  }
  render () {    
    return (
      <div className='tool-controller'>
        <div className='square' onClick={this.handleToolsClick}>
          <img src={this.props.toolAsset} />
        </div>
        <div className={`tools-menu ${this.state.displayMenu ? '' : 'hidden'}`}>
          <div className='tools' style={{
            width: this.props.width * 0.2,
            height: this.props.height * 0.2
          }}>
            <div className='inner-view' style={{
              // top: (this.props.offsetTop * 0.2 * -1),
              top: 0,
              left: this.props.offsetLeft * 0.2 * -1,
              width: window.innerWidth * 0.2,
              height: this.props.height * 0.2
            }}></div>
          </div>
        </div>
      </div>
    )
  }
}