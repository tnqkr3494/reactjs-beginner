import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Detail from "./components/Detail";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
