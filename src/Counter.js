import React, { Component } from "react";
import { ThemeContext } from "./App.js";
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
      <ThemeContext.Consumer>
        {(style) => (
          <div>
            {console.log(this.state)}
            <button
              style={style}
              onClick={() => {
                this.ChangeNumber(-1);
              }}
            >
              -
            </button>
            <span>{this.state.count}</span>
            <button
              style={style}
              onClick={() => {
                this.ChangeNumber(+1);
              }}
            >
              +
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default Counter;
