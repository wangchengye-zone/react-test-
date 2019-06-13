import React from 'react';
// react组件的定义 1.es6的class继承形式 2.函数式形式
// * 参考： http://es6.ruanyifeng.com/#docs/class 
// class类语法的组件的定义
// 通过render钩子函数可以渲染组件的结构
class App extends React.Component {
  render () { // 负责渲染相应的页面  return一段html代码，这段html代码用括号包裹
    return (
      <div>
        <h3>这是一段小括号包裹的用render钩子函数渲染的h3标签</h3>
        <div>hello react</div>
      </div>
    )
  }
}

export default App; // 一定不能忘记暴露组件
