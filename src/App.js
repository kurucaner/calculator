import "./App.css";
import { useState, useEffect } from "react";

const createDigits = () => {
  const digits = [];
  for (let i = 1; i < 10; i++) {
    digits.push(<button key={i}>{i}</button>);
  }
  return digits;
};

function App() {
  return (
    <div classname="App">
      <div classname="calculator">
        <div classname="display">
          <span>(0)</span> 0
        </div>

        <div classname="operators">
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>/</button>

          <button>DEL</button>
        </div>

        <div classname="digits">
          {createDigits()}
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}
export default App;
