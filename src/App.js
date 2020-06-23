import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import HookComponent from "./hookComponent";
export const ThemeContext = React.createContext();

function App() {
  console.log("Render App");
  const [theme, setTheme] = useState("red");
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter initialCount={0} />
      CounterHook
      <HookComponent initialCount={0} />
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return setInterval(
              () => (prevTheme === "red" ? "blue" : "red"),
              1000
            );
          })
        }
      >
        Toggle Theme{" "}
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
// setInterval(() => {

// }, 1000);

// prevTheme === "red" ? "blue" : "red";
