import React from 'react'; // 必须得引用，因为ReactDOM依赖于此
import ReactDOM from 'react-dom'; // 入口文件必须引入，因为需要渲染DOM的内容
import App from '@/components/App12' // 引入一个App.js的组件

// 给页面里 一个id为root的标签渲染一个App的组件
// react中的组件名称首字母必须大写   （因为如果是小写可能跟标签发生冲突）

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
