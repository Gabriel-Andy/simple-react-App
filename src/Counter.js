import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount,
      name: "gabriel fono",
    };
  }
  ChangeNumber(amount) {
    this.setState((prevState) => {
      return { count: prevState.count + amount };
    });
  }

  render() {
    return (
      <div>
        {/* {console.log(this.state)}
        <button
          onClick={() => {
            this.ChangeNumber(-1);
          }}
        >
          -
        </button>
        <span>{this.state.count}</span>
        <button
          onClick={() => {
            this.ChangeNumber(+1);
          }}
        >
          +
        </button> */}
      </div>
    );
  }
}
export default Counter;
