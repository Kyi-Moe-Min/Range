import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Range } from "./app";

import "./styles.css";

function App() {
  let [value, setValue] = useState(1);
  return (
    <div className="App">
      <Range
        onChange={e => setValue(e.target.value)}
        min={1}
        max={10}
        value={value}
        step={1}
        id="range"
        name="range"
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
