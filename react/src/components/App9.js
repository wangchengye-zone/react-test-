import React, { Component } from 'react';

class App extends Component {
constructor (props) {
  super(props);
  console.log('1',this);
  this.btnClickFun = this.btnClickFn.bind(this)
}
btnClickFn () {
  console.log('2',this);
}

  render () {
    return (
      <div>
        <button onClick = { this.btnClickFun}>react按钮</button>
      </div>
    )
  }
}

export default App