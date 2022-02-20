import React from "react";

import mockData from "./mock"; // 請使用此資料
import Aside from "./components/Aside";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="flex">
        <aside>
          <Aside />
        </aside>
        <main className="flex-1">
          <Header />
          <div className="mt-[80px]">
            <MainContent mockData={mockData} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
