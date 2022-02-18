import React from "react";
import "./styles.css";
import Requirement from "./Requirement";

import mockData from "../mock"; // 請使用此資料

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Requirement />
      </div>
    );
  }
}

export default App;
