import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./ui/Homepage";
import Navbar from "./ui/Components/Navbar";
import ButtomBar from "./ui/Components/BottomBar";
import ProductList from "./ui/ProductList";

class Routes extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            path="/ladies/dresses"
            render={props => <ProductList gender="ladies" category="dresses" />}
          />
        </Switch>
        <ButtomBar />
      </div>
    );
  }
}

export default Routes;
