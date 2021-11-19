import { createContext } from "react";
export const defaultState = {
  color: 'red',
  num: 0
}

export const reducer = (state:any, action:any) => {
  console.log(7,state, action);
  if (action.type === "change") {
    return {
      color: action.color,
      num: action.num
    }
  } 
  return state;
}

export const reducerContext = createContext({state:defaultState} as any);