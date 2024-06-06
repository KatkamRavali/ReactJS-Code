import "./App.css";

// Importing call component
import ClassComponent from "./Components/ClassComponent";
import FunctionComponent from "./Components/FunctionComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Class Components </p>
        <ClassComponent />
        <br />
        <p> Function Components </p>
        <FunctionComponent />
      </header>
    </div>
  );
}

export default App;
