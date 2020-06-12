import React, { Component } from "react";
import { ValueCounterView } from "../views";
import { connect } from "react-redux";

import { incrementByOne, incrementByAmount, decrementByOne } from '../../store/utilities/counterValue'
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
    console.log("this.props: ", this.props)
    this.state = {
      amountToIncrementBy: 0,
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
    this.props.handleIncrementByAmount(this.state.amountToIncrementBy);
  }
  render() {
    return <ValueCounterView 
    counterValue = {this.props.currentV}
    handleIncrementByOne={this.handleIncrementByOne}
    handleDecrementByOne={this.handleDecrementByOne}
    handleIncrementByAmount={this.handleIncrementByAmount}
    />
  }
}

// At this point, there will be a key called "currentValue" and value (for that key) which is state.counterValueReducer
function mapState(state) {
  console.log("in map state:")
  console.log("redux store is: ", state)
  console.log("Current V is : ", state.storeValue)
  return {
    currentV: state.storeValue
  }
}

const mapDispatch = (dispatch) => {
  return {
    incrementByOne: () => dispatch(incrementByOne()),
    decrementByOne: () => dispatch(decrementByOne()),
    handleIncrementByAmount: (amount) => dispatch(incrementByAmount(amount))
  }
}


export default connect(mapState, mapDispatch)(ValueCounterContainer);