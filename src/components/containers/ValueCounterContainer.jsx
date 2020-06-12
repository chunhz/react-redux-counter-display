import React, { Component } from "react";
import { ValueCounterView } from "../views";
import { connect } from "react-redux";
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
  }

  render() {
    return <ValueCounterView counterValue = {this.props.currentV}/>
  }
}

// At this point, there will be a key called "currentValue" and value (for that key) which is state.counterValueReducer
function mapState(state) {
  console.log("in map state:")
  console.log("redux store is: ", state)
  return {
    currentV: state.storeValue
  }
}

// function mapDispatch(value) {
//   return{

//   }
// }


export default connect(mapState)(ValueCounterContainer);