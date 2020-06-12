import React from "react";

function ValueCounterView(props) {
  return (
    <div>
      <h1> React-Redux Counter Value</h1>
    <h1>{props.counterValue}</h1>
    <button onClick = {props.handleIncrementByOne}>Counter + 1</button>
    <button onClick = {props.handleDecrementByOne}>Counter - 1</button>
    <label>Increse by amount input</label>
    <input type="text"  name= "amountToIncrementBy" value = {this.state.amountToIncrementBy} onChange={this.handleIncrementByAmount}/>
    </div>
  )
  
}

export default ValueCounterView;