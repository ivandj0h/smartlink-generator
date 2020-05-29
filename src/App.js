import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

const { app } = window.require("electron").remote;

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Content />
      </div>
    </div>
  );
};

export default App;
