// import React, { Component } from 'react';

// class App extends Component {
//   construtor (props) {
//     super(props);
//     this.state = {
//       flag: false
//     }
//   }

//   render () {
//     return (
//       <div>
//         {
//           this.state.flag ? <h1>如果为真我就显示</h1> : <h1>如果为假时我就先显示</h1>
//         }
//       </div>
//     )
//   }
// }

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
//   render(){
//     let arr = [];
//     this.state.list.map((item, index) => {
//       let arrItem = [];
//       item.hero.map((itm, idx) => {
//         let arrli = <li key = { idx*5 }> { itm } </li>
//         arrItem.push(arrli)
//       })
//       let oLi = <li key = { index }> { item.country } <ul> { arrItem } </ul></li>
//       arr.push(oLi)
//     })
//     return (<ul> { arr } </ul>)
//   } 
// }

render () {
  let arr = []
  this.state.list.map((item, index)=>{
    let itemArr = []
    item.hero.map((itm, idx)=>{
      let arrLi = <li key = {idx}> { itm }</li>
      itemArr.push(arrLi)
    })
    let oLi = <li key = { index }> { item.country } <ul> { itemArr } </ul></li>
    arr.push(oLi)
  
  })
  return (
    <ul>{ arr }</ul>
  )
}
}
export default App