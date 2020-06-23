import React from "react";
import "./App.css";
import Counter from "./Counter"
import HookComponent from "./hookComponent"

function App() {

  return (
    <>
      <Counter initialCount={0} />
      <HookComponent initialCount ={0} />
    </>

  );
}

export default App;
