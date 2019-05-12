import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./ui/Homepage";
import Navbar from "./ui/Components/Navbar";
import ButtomBar from "./ui/Components/BottomBar";

class Routes extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Homepage itemProp={props} />}
          />
        </Switch>
        <ButtomBar />
      </div>
    );
  }
}

export default Routes;
