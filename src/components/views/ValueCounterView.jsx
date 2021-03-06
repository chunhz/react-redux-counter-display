import React from "react";

function ValueCounterView(props) {
  return (
    <div>
      <h1> React-Redux Counter Value</h1>
    <h1>{props.counterValue}</h1>
    <button onClick = {props.handleIncrementByOne}>Counter + 1</button>
    <button onClick = {props.handleDecrementByOne}>Counter - 1</button>
    <div>
    <input type="text"  name= "amountToIncrementBy" value = {props.amountToIncrementBy} onChange={props.handleIncrementChange}/>
    <button onClick={props.handleIncrementByAmount}>Increase by amount</button>
   </div>
    <input type="text" name= "amountToDecreseBy" value = {props.amountToDecreaseBy} onChange={props.handleDecrementChange}/>
    <button onClick={props.handleDecrementByAmount}>Decrease by amount</button>
    </div>
  )
  
}

export default ValueCounterView;