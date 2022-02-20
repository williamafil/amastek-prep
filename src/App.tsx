import React from "react";
import mockData from "./mock"; // 請使用此資料
import Layout from "./components/Layout";
import MainContent from "./components/MainContent";
import "./styles.css";
class App extends React.Component {
  render() {
    return (
      <Layout>
        <MainContent mockData={mockData} />
      </Layout>
    );
  }
}

export default App;
