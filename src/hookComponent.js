import React, { useState } from "react";

const HookComponent = ({ initialCount }) => {
  const [state, setCount] = useState({ count: initialCount });
  return (
    <div>
      <button
        onClick={() =>
          setCount((prevState) => {
            return { count: prevState.count - 1 };
          })
        }
      >
        -
      </button>
      <span>{state.count}</span>
      <button
        onClick={() =>
          setCount((prevState) => {
            return { count: prevState.count + 1 };
          })
        }
      >
        +
      </button>
    </div>
  );
};

export default HookComponent;
