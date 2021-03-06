import React from 'react'
import PropTypes from 'prop-types'
import HorizontalRuler from './HorizontalRuler'
import VerticalRuler from './VerticalRuler'
import './index.css'

export default class Ruler extends React.Component {
  
  static propTypes = {
    children: PropTypes.node.isRequired,
    refContainer: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  }
  static defaultProps = {

  }
  constructor(props) {
    super(props)
    this.contentRef = null
    this.state = {
      _mPos: { x: 0, y: 0 }, /* x: top, y: vertical */
      height: 0,
      width: 0,
      childrenRef: null,
      offsetTop: 0,
      offsetLeft: 0
    }
  }
  componentDidMount () {
    this.props.toolAsset && this.contentRef.addEventListener('wheel', this.handleScroll)
    this.setState({
      childrenRef: this.contentRef
    })
  }
  componentWillUnmount () {
    this.props.toolAsset && this.contentRef.removeEventListener('wheel', this.handleScroll)
  }
  componentDidUpdate() {
    if(this.props.refContainer !== null) {

      const height = this.props.refContainer.clientHeight
      const width = this.props.refContainer.clientWidth
      if(width !== this.state.width || height !== this.state.height) {
        this.updateDimension(width, height)
      }
      
    } 
  }
  updateDimension (width, height) {
    this.setState({ width, height })
  }
  handleMoving = e => {
    this.setState({
      _mPos: {
        x: e.pageX - this.contentRef.getBoundingClientRect().left,
        y: e.pageY - this.contentRef.getBoundingClientRect().top,
      }
    })
  }
  handleScroll = e => {
    const dimensions = this.contentRef.getBoundingClientRect()
    this.setState({
      offsetLeft: dimensions.left,
      offsetTop: dimensions.top
    })
  }

  render () {
    return (
      <div className='zap__kit-ruler-container'>
        <HorizontalRuler width={this.state.width} mouse={this.state._mPos} />
        <VerticalRuler height={this.state.height} mouse={this.state._mPos} />
        <div ref={ref => this.contentRef = ref} className='zap__kit-content' style={{ height: this.state.height - 20, width: this.state.width - 20 }} onMouseMove={this.handleMoving}>{this.props.children}</div>
      </div>
    )
  }
}