import React, { useState } from "react";
import BasicLayoutPage from "../Layouts/BasicLayout";

function FunctionComponent() {
  const [countInc, setCountInc] = useState(0);
  const [countDec, setCountDec] = useState(0);
  const [count, setCount] = useState(0);
  const reduceCount = () => {
    setCount(count - 1);
  };
  const [changeName, setChangeName] = useState("");
  return (
    <div className="App">
      <p> This is a Function Components </p>
      {/* Increment the value */}
      <button onClick={() => setCountInc(countInc + 1)}>
        Click me to increment the value
      </button>
      <h2>{countInc}</h2>
      <br />
      {/* Decrement the value  */}
      <button onClick={() => setCountDec(countDec - 1)}>
        Click me to decrement the value
      </button>
      <h2>{countDec}</h2>
      <br />
      {/* Increase and Decrease both values in single button */}
      <button onClick={() => setCount(count + 1)}>
        click me for increase value
      </button>
      <button onClick={reduceCount}> click me for reduced value </button>
      <h2>{count}</h2>

      <p>
        My name is <u>{name}</u> . I am <u>{age}</u> years old and I am
        currently pursing my graduation at <u> {graduation} </u>
      </p>
      <input onChange={(e) => setChangeName(e.target.value)} />
      <button onClick={() => setName(changeName)}>
        Click me to update the Name
      </button>
    </div>
  );
}

/**
 * const FunctionComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p> This is a Function Components </p>
      </header>
    </div>
  );
}
 */

export default BasicLayoutPage(FunctionComponent);
