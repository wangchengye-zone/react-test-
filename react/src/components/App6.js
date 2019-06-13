import React, { Component } from 'react';
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [
        {
          country: '艾欧尼亚',
          hero: ['盖伦','嘉文','赵信','拉克丝']
        },
        {
          country: '诺克萨斯',
          hero: ['斯温','厄加特','卡特琳娜','卡西奥佩娅']
        }
      ]
    }
  }
  render () {
    let arr= [];

    this.state.list.map((item,index)=>{
      let arrItem = [];
      let arrLi = item.hero.map((itm, idx)=>{
        let arrLi = <li key= { idx }> { itm } </li>
        return (arrItem.push(arrLi))   
      })
      let oLi = <li key = { index }> { item.country} <ul> { arrItem } </ul></li>
      arr.push(oLi);
    })
    return (
      <ul>
        { arr }
      </ul>
    )
  }
}

export default App