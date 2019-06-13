import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      // flag: false
      flag: true
    }
  }
  render () {
    // 只能先判断条件再return  不能在return中判断条件
    if (this.state.flag) {
      return (
        <h1>如果为真时我就显示</h1>
      )
    } else {
      return (
        <h1>如果为假时我就显示一次</h1>
      )
    }
  }
}
export default App; 