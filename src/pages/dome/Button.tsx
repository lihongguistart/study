import React, { memo } from 'react'
// memo 高阶组件，只有传人props改变才会重新渲染
export default memo(function Button(props:any) {
  console.log(4, props.handleClick);
  return (
    <div>
      <button onClick={props.handleClick}>test useCallback +1</button>
    </div>
  )
});
