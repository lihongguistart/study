import React, { Component } from 'react'

import Content from './Content'
export default class Index extends Component<any> {
  constructor(props:any){
    super(props);
    this.state = {myNumber:1};
  }

  // function handleClick(){
  //     this.setState({myNumber: 2});
  // };

  render() {
    return (
      <>
        <div>
          class
          <button onClick={()=>{this.setState({myNumber: 2})}}>+</button>
          <Content myNumber={this.state}></Content>
        </div>

        <div>
        <div>灵魂拷问</div>

        
        <div>
          <h3>响应式原理，setstate同步异步</h3>
          原生事件中同步. react事件中异步，同时多个setstate会合并成一个
          <a href="https://zhuanlan.zhihu.com/p/350332132">https://zhuanlan.zhihu.com/p/350332132</a>
          <a href="https://juejin.cn/post/6923073253988810765">react页面渲染流程 https://juejin.cn/post/6923073253988810765</a>
        </div>

        <div>
          <h3>react 生命周期 </h3>
          <a href="https://zh-hans.reactjs.org/docs/react-component.html">https://zh-hans.reactjs.org/docs/react-component.html</a>
          <img src="" alt="" />
          <img src="../img/did.jpg" alt="" />
          <a href="https://www.jianshu.com/p/514fe21b9914">16之前版本 https://www.jianshu.com/p/514fe21b9914</a>
        </div>

        <div>
          <h3>jsx模版的原理</h3>
          {/* <img src="../img/jsx.png"/> */}
        </div>

        <div>
          <h3>diff算法原理</h3>
          <a href="https://zhuanlan.zhihu.com/p/140489744">https://zhuanlan.zhihu.com/p/140489744</a>
        </div>
        <div>
          <h3>fiber</h3>
          <a href="https://www.jianshu.com/p/bf824722b496">https://www.jianshu.com/p/bf824722b496</a>
        </div>
        <div>
          <h3>hooks的优点与缺点</h3>
          <a href="https://zhuanlan.zhihu.com/p/88593858">https://zhuanlan.zhihu.com/p/88593858</a>
        </div>
        </div> 
      </>
    )
  }
}
