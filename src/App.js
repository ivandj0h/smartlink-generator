import React, { Fragment, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Download from "./components/Download";

const { app } = window.require("electron").remote;

const App = () => {
  const [basket, setBasket] = useState(0);

  const addToBasket = () => {
    setBasket(basket + 1);
  };

  return (
    <Fragment>
      <BrowserRouter>
        <Header basketNumber={basket} />
        <Switch>
          <div className="container">
            <Route
              exact
              path="/"
              render={() => <Content myContentFunc={addToBasket} />}
            />
            <Route path="/download" component={Download} />
          </div>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
