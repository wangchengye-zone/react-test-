import React, { Component } from 'react' // 类组件的另一种引用方法
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
    return (
      <ul>
        {
          this.state.list.map((item,index) => {
            return(
              <li key={ index }>
                { item.country }
                <ul>
                  {
                    item.hero.map((itm,idx) => {
                      return (
                        <li key={ idx }>
                          { itm }
                          </li>
                      )
                  }
                    )}
                </ul>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default App