import React, { Component } from 'react';
class App extends Component {
  constructor (props) {
    super(props);
    this.changeData1 = this.changeData1.bind(this)
    this.state = {
      msg: 'hello world'
    }
  }
  changeData1 () {
    this.setState({
      msg: '你就猜我变不变'
    })
  }
  changeData () {
    this.setState({
      msg: '你变了吗'
    })
  }
  render () {
    return (
      <div>
        { this.state.msg }
        <button onClick = {this.changeData1}>变不变</button>
        <button onClick = {this.changeData.bind(this)}>修改</button>
      </div>
    )
  }
 }
 export default App