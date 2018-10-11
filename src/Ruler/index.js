import React from 'react'
import PropTypes from 'prop-types'
import HorizontalRuler from './HorizontalRuler'
import VerticalRuler from './VerticalRuler'
import Tools from './tools'
import './index.css'

export default class Ruler extends React.Component {
  
  static propTypes = {
    children: PropTypes.node.isRequired,
    toolAsset: PropTypes.string,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }
  static defaultProps = {

  }
  constructor(props) {
    super(props)
    this.contentRef = null
    this.state = {
      _mPos: { x: 0, y: 0 }, /* x: top, y: vertical */
      height: 0, // used for vertical ruler
      width: 0, // used for horizontal ruler
      childrenRef: null,
      offsetTop: 20,
      offsetLeft: 0,
      viewerHeight: 0,
      viewerWidth: 0
    }
  }
  componentDidMount () {
    this.props.toolAsset && this.contentRef.addEventListener('wheel', this.handleScroll)

    const height = this.overflowContainer.clientHeight
    const width = this.overflowContainer.clientWidth
    this.updateDimension(width, height)
  }
  componentWillUnmount () {
    this.props.toolAsset && this.contentRef.removeEventListener('wheel', this.handleScroll)
  }

  updateDimension (width, height) {
    this.setState({ width, height })
  }
  handleMoving = e => {
    this.setState({
      _mPos: {
        x: e.pageX - this.contentRef.getBoundingClientRect().left,
        y: e.pageY - this.contentRef.getBoundingClientRect().top
      }
    })
  }
  handleScroll = e => {
    const viewerDimension = this.viewerRef.getBoundingClientRect()
    const dimensions = this.contentRef.getBoundingClientRect()
    this.setState({
      offsetLeft: dimensions.left,
      offsetTop: dimensions.top,
      viewerWidth: viewerDimension.width,
      viewerHeight: viewerDimension.height
    })
  }
  render () {
    return (
      <div className='zap__kit-ruler-container' style={{ height: '100%', width: '100%', overflow: 'auto' }} ref={ref => { this.viewerRef = ref }}>
        <div className='zap__kit-content-wrapper' style={{ height: this.props.height, width: this.props.width }} ref={ref => { this.overflowContainer = ref }}>
          {
            this.props.toolAsset && <Tools
              offsetLeft={this.state.offsetLeft}
              offsetTop={this.state.offsetTop}
              toolAsset={this.props.toolAsset}
              width={this.props.width}
              height={this.props.height}
              viewerWidth={this.state.viewerWidth}
              viewerHeight={this.state.viewerHeight}
              childrenRef={this.contentRef}
              parentRef={this.overflowContainer}
            />
          }
          <HorizontalRuler width={this.props.width + 20} mouse={this.state._mPos} />
          <VerticalRuler height={this.props.height + 20} mouse={this.state._mPos} />
          <div ref={ref => { this.contentRef = ref }}
            className='zap__kit-content'
            style={{ height: this.props.height + 20, width: this.props.width + 20 }}
            onMouseMove={this.handleMoving}>{this.props.children}</div>
        </div>
      </div>
    )
  }
}