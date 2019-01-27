# zap-kit

> react component library

> Zap-kit is a collection of widgets for the html canvas. 
>  * Components
>     * [Ruler](#ruler-component)

[![NPM](https://img.shields.io/npm/v/zap-kit.svg)](https://www.npmjs.com/package/zap-kit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save zap-kit
```



## Usage

### Ruler Component
![Ruler component](./docs/ruler-component-example1.png)
```jsx
import { Ruler } from 'zap-kit'
export default class RulerContainer extends Component {
  constructor(props) {
    super(props)
    this.refContainer = React.createRef()
    this.state = {
      container: null
    }
  }
  componentDidMount () {
    this.setState({
      container: this.refContainer
    })
  }
  render () {
    return (
      <div style={{
          height: '100%',
          width: '100%'
        }}
        ref={ref => this.refContainer = ref}
      >
        <Ruler refContainer={this.state.container}>

          <div className='display-panel' style={{ backgroundColor: 'red', height: '100%' }}>
            Display Content
          </div>
        </Ruler>
      </div>
    )
  }
}
```

## License

MIT © [cpt-chewieeee](https://github.com/cpt-chewieeee)
