import React,{ Component } from 'react' // 类组件的另一种引用方法

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: ['a','b','c','d']
    }
  }
  render () {
    return (
      <ul>
        {
          this.state.list.map((item, index) => {
            return (<li key = { index }>
              { item }
              </li>)
          })
        }
      </ul>
    )
  }
}
export default App