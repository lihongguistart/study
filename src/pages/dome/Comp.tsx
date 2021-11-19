import React, { useState, useCallback, useContext, useEffect, useReducer, useRef } from 'react';
import { defaultState, reducer, reducerContext } from "./store/reducer";

 const Comp = ( props:any) => {
   console.log(5, props.callback);
  const [n, setN] = useState(0);
  const { state, dispatch } = useContext(reducerContext);
  // const [ dispatch ] = useReducer(reducer, defaultState);

  useEffect(()=>{
    console.log(8, state);
    setN(state.num);
  },[state]);
  
  const handleBack = () => {
    console.log(9,state.num, n);
    // return () => {
      props.callback(n);
    // }
  };
  return (
  <>
    <div>子组件</div>
    <div style={{color: state.color}}>父组件传人值：{props.name+'_'+state.num}</div>
    <button onClick={handleBack}>子组件返回值：{n}</button>
    

    <button onClick={()=>dispatch({
        type: "change",
        color: 'yellow',
        num: state.num-1
      } )
    }>-</button>
  </>)
}
export default Comp;