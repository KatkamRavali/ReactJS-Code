import "./App.css";

// Importing call component
import ClassComponent from "./Components/ClassComponent";
import FunctionComponent from "./Components/FunctionComponent";
import FunctionComponent1 from "./Components/PropsFunctionComponent";
import FunctionComponent2 from "./Components/UpdatingData";
import FunctionComponent3 from "./Components/UpdateUsingButton";
import FunctionComponent4 from "./Components/UpdateUsingInput";
import FunctionComponent5 from "./Components/PropMethods";
import FunctionComponent6 from "./Components/PropMethods";
import FunctionComponent7 from "./Components/PropMethods";

// ---- Updating a value ----
import { useState } from "react";

function App() {
  const [name, setName] = useState("Ravali Katkam"); // --- updating a value ----
  const [nameValue, setNameValue] = useState("Ravali Katkam");
  const [names, setNames] = useState("Ravali Katkam");
  const [nameValues, setNameValues] = useState("Ravali Katkam");

  return (
    <div className="App">
      <header className="App-header">
        <p className="App-P"> Class Components </p>
        <ClassComponent />
        <br />

        <p className="App-P"> Function Components </p>
        <FunctionComponent />
        <br />

        <p className="App-P"> Using Props </p>
        <FunctionComponent1
          name="Ravali"
          age={20}
          graduation="St Francis College for women"
        />

        <p className="App-P">
          Updating the name data internally and adding course data externally
        </p>
        <FunctionComponent2
          name={name}
          age={20}
          graduation="St Francis College for women"
        />

        <p className="App-P"> Updating the data using button </p>
        <FunctionComponent3
          name={nameValue}
          age={20}
          graduation="St Francis College for women"
          setName={setNameValue}
        />

        <p className="App-P"> Updating the data using input </p>
        <FunctionComponent4
          name={names}
          age={20}
          graduation="St Francis College for women"
          setName={setNames}
        />

        <p className="App-P">
          Updating the data using different Props methods - 1
        </p>
        <FunctionComponent5
          name={nameValues}
          age={20}
          graduation="St Francis College for women"
          setName={setNameValues}
        />

        <p className="App-P">
          Updating the data using different Props methods - 2
        </p>
        <FunctionComponent6
          name={nameValue}
          age={20}
          graduation="St Francis College for women"
          setName={setNameValue}
        />

        <p className="App-P">
          Updating the data using different Props methods - 3
        </p>
        <FunctionComponent7
          name={names}
          age={20}
          graduation="St Francis College for women"
          setName={setNames}
        />
      </header>
    </div>
  );
}

export default App;
