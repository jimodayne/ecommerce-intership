import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Hello from "./ui/Hello";
import Navbar from "./ui/Components/Navbar";

class Routes extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <div className="HomePage" itemProp={props}>
                <Hello />
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Routes;
