import React, { Component, createElement } from 'react'

export default class Content extends Component<any> {
  constructor(props:any) {
    super(props);
    console.log(6, this.props);

  }
  componentWillMount() {
      console.log('componentWillMount')
  }
  componentDidMount() {
       console.log('componentDidMount')
  }
  componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
        // return true;
        return false;
  }
  componentWillUpdate() {
        console.log('componentWillUpdate');
  }
  componentDidUpdate() {
        console.log('componentDidUpdate')
  }
  componentWillUnmount() {
         console.log('componentWillUnmount')
  }
 
    render() {
      return (
        <div>aaaa
          <h3>{this.props.myNumber.myNumber}</h3>
        </div>
      );
    }
}