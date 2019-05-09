import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Hello from "./ui/Hello";

class Routes extends Component {
  render() {
    return (
      <div className="app">
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
