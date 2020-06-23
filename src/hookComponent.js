import React, { useState } from "react";

const HookComponent = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
};

export default HookComponent;

// <button onClick={() => setCount(prevState => {
//     return { count: prevState.count - 1 }
// })}>
//     -
//       </button>
