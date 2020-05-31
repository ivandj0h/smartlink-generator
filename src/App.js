import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Download from "./components/Download";

const { app } = window.require("electron").remote;

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Content />
        <Download />
      </div>
    </Fragment>
  );
};

export default App;
