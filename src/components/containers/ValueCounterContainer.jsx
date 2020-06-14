import React, { Component } from "react";
import { ValueCounterView } from "../views";
import { connect } from "react-redux";

import { incrementByOne, incrementByAmount, decrementByOne, decrementByAmount } from '../../store/utilities/counterValue'
// import { decrementByOne} from '../../store/utilities/counterValue'
/*

I want to keep my view layer as my view layer (ReactJS);

But...I still would like to have state management (Redux);

Therefore, I will incorporate Redux in order to keep track of (and modify) the number value;

If I am to use Redux, then I need to have this component connected to (subscription) the Redux store;

This gives me a heads-up that indicates we will use connect() in this smart container;

I will be about to read from (mapState) the Redux store and write to (mapDispatch) the Redux store;

*/

class ValueCounterContainer extends Component {
  constructor(props) {
    console.log("in constructor")
    super(props);
    this.state = {
      amountToIncrementBy: 0,
      amountToDecreaseBy: 0,
    }
  }
  handleIncrementByOne = () => {
    this.props.incrementByOne();
  }
  handleDecrementByOne = () => {
    this.props.decrementByOne();
  }
  handleIncrementChange = (event) => {
    this.setState({amountToIncrementBy: Number(event.target.value)});
  }
  handleIncrementByAmount = () => {
    this.props.incrementByAmount(this.state.amountToIncrementBy);
  }
  handleDecrementChange = (event) => {
    this.setState({amountToDecreaseBy: Number(event.target.value)});
  }
  handleDecrementByAmount = () => {
    this.props.decrementByAmount(this.state.amountToDecreaseBy);
  }
  render() {
    return <div>
    <ValueCounterView 
    counterValue = {this.props.currentV}
    handleIncrementByOne={this.handleIncrementByOne}
    handleDecrementByOne={this.handleDecrementByOne}
    handleIncrementByAmount={this.handleIncrementByAmount}
    handleDecrementByAmount={this.handleDecrementByAmount}
    handleDecrementChange={this.handleDecrementChange}
    handleIncrementChange={this.handleIncrementChange}
    />
     {/* <div>
    <input type="text"  name= "amountToIncrementBy" value = {this.state.amountToIncrementBy} onChange={this.handleIncrementChange}/>
    <button onClick={this.handleIncrementByAmount}>Increase by amount</button>
   </div>
    <input type="text" name= "amountToDecreseBy" value = {this.state.amountToDecreaseBy} onChange={this.handleDecrementChange}/>
    <button onClick={this.handleDecrementByAmount}>Decrease by amount</button> */}
    </div>
  }
}

// At this point, there will be a key called "currentValue" and value (for that key) which is state.counterValueReducer
function mapState(state) {
  console.log("in map state:")
  console.log("redux store is: ", state)
  console.log("state", state.counterValue)
  return {
    currentV: state.counterValue
  }
}

const mapDispatch = (dispatch) => {
  return {
    incrementByOne: () => dispatch(incrementByOne()),
    decrementByOne: () => dispatch(decrementByOne()),
    incrementByAmount: (value) => dispatch(incrementByAmount(value)),
    decrementByAmount: (value) => dispatch(decrementByAmount(value)),
  }
}


export default connect(mapState, mapDispatch)(ValueCounterContainer);