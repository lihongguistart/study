import React, { useState, useEffect, useRef, forwardRef/*透传ref*/,useImperativeHandle/*给透传ref赋值*/, useContext, useReducer, useCallback, useMemo, } from 'react';
import './index.css';
import dataContext from './context';
import { defaultState, reducer, reducerContext } from "./store/reducer";
import Comp from './Comp';
import Button from './Button';
export default function Domes() {
  // 相当render() 语法糖
  ///*  useState */ 
  console.log(8,useState());
  const [html, setHTML] = useState("<div style='color: #000;'><b>bbbb</b> &nbsp; &nbsp; <i>iiiiii</i> <span style='color: red;'>red</span></div>");
  const [obj, setObj] = useState({name: "abc" , vif: true, vshow: true, classa: true});
  const [list, setList] = useState([{a:1}, {a:2}, {a:3}]);

  ///*  useEffect */ 
  const mounting = useRef(true);
  const dom = useRef(null);//获取标签
  useEffect(() => {
    console.log(14,"componentDidUpdate,每次加载执行");
    if (mounting.current) {
      mounting.current = false;
    } else {
      // run  callback
      console.log(19,"componentDidUpdate，第二次再渲染");
    }
  });
  useEffect(() => {
    console.log(17,"mounted,componentDidMount");
    return () => {
      console.log(30,"mounted,componentWillUnMount");
    };
  }, []);
  useEffect(() => {
    console.log(23,"watch");
  }, [obj.vif]);

  ///*  useContext */ 
  const dat  = useContext(dataContext);

  ///*  useReducer */ 
  // const { state, dispatch } = useContext(reducerContext);
  const [state, dispatch] = useReducer(reducer, defaultState);
  // console.log(42,state, dispatch, useContext(reducerContext));


  // useMemo 计算属性
  let doubleNum = useMemo(() => {
    console.log(111);
    return state.num *2;
  }, [state.num]);

  const handleClickClass = () => {
    setObj({
      name: obj.name, 
      vif: obj.vif, 
      vshow: obj.vshow, 
      classa: !obj.classa
    })
  };
  const handleClickIf = () => {
    setObj({
      name: obj.name, 
      vif: !obj.vif, 
      vshow: obj.vshow, 
      classa: obj.classa
    })
  };
  const handleClickShow = () => {
    setObj({
      name: obj.name, 
      vif: obj.vif, 
      vshow: !obj.vshow, 
      classa: obj.classa
    })
  };
  const changeNum = useCallback( (type:string) => {
    console.log(71,state);
    if (type==="+") {
      dispatch({
        type: "change",
        color: 'red',
        num: state.num+1
      } );
    } else {
      dispatch({
        type: "change",
        color: 'blue',
        num: state.num-1
      } );
    }
  },[state.num]);

  const getCallBack = (n:any) => {
    console.log(51, "子组件返回值:" , n);
  };
  const getCallBack1 = useCallback(
    (n:any) => {
      console.log(51, "子组件返回值:" , n);
    },
    [],
  );
  
  const handleClick = () => {
    console.log(97);
    dispatch({
      type: "change",
      color: 'red',
      num: state.num+1
    } );
  };
  // usecallback
  const handleClick1 = useCallback( () => {
    console.log(99);
    dispatch({
      type: "change",
      color: 'red',
      num: state.num+1
    } );
  }, []);






  return (
    <div className={`dome wrap ${obj.classa ? "red" : null}`}>
      <button onClick={handleClickClass}>changeClass</button>
      <div>
        dome
      </div>
      <br/>
      <br/>
      <div>
        <button onClick={handleClickIf}>ifchange</button>
        { obj.vif && <div>v-if</div> }
        { obj.vif ? <div>v-if</div> : null }
      </div>
      <br/>
      <br/>
      <div>
        <button onClick={handleClickShow}>showchange</button>
        <div style={{"display": obj.vshow ? "block": "none"}}>v-show</div>
      </div>
      <br/>
      <br/>

      <div>
        <div> v-for </div>
        {
          list.map( (item,index) => {
            return <div key={index}>{item.a}</div>
          })
        }
      </div>

      <br/>
      <br/>
      
      <div>v-html</div>
      <div dangerouslySetInnerHTML={{__html: html}}></div>
      <br/>
      <br/>

      <div>
      <dataContext.Provider value={{name:'context2'}}>
        { dat.name }
      </dataContext.Provider>
      </div>
      <dataContext.Provider value={{name:'context1'}}>
        <dataContext.Consumer>{value=>{
          return <div>{value.name}</div>
        }}</dataContext.Consumer>
      </dataContext.Provider>
      <br/>
      <br/>



      <div>
        <reducerContext.Provider value={{state, dispatch}}>
          <div style={{color: state.color}}>{state.num}
            <button onClick={()=>changeNum('+')}>+</button>
            <button onClick={()=>dispatch({
                type: "change",
                color: 'blue',
                num: state.num-1
              } )
            }>-</button>
            <Comp name="aaaa" callback={getCallBack1}></Comp>
            <Button handleClick={ handleClick1 }></Button>
            <div ref={dom}>{"double: "+doubleNum}</div>
          </div> 
        </reducerContext.Provider>
      </div>
      <br/>




      <br/>
      <div></div>

    </div>
  );
};

