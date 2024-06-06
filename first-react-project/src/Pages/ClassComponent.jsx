import React from "react";
import BasicLayoutPage from "../Layouts/BasicLayout";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Devtown",
      age: 12,
    };
  }
  render() {
    return (
      <div className="App">
        <p> This is the Class Components </p>
      </div>
    );
  }
}

export default BasicLayoutPage(ClassComponent);
