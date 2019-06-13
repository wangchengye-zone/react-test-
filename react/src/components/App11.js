import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props);
    console.log(1,this);
  }
  btnClickFn (event,id) {
    console.log(id,this)
  }
  btnClickFun (id) {
    console.log(id,this)
  }
  render () {
    return (
      <div> 
        <button onClick = { this.btnClickFun.bind(this,33) }> react按钮 </button>
        <button onClick = { (e) => this.btnClickFn(e,11) }>react按钮</button>
      </div>
    )
  }
}

export default App;