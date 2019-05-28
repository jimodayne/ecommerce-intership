import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import { Meteor } from "meteor/meteor";
import Homepage from "./ui/Homepage";
import NavContainer from "./ui/Components/NavContainer";
import ButtomBar from "./ui/Components/BottomBar";
import ProductList from "./ui/ProductList";
import Register from "./ui/Components/Register";
import Login from "./ui/Components/Login";
import ProductPage from "./ui/ProductPage";
import ShoppingCartWrapper from "./ui/ShoppingCartWrapper";

class Routes extends Component {
  render() {
    return (
      <div className="app">
        <NavContainer />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            path="/ladies/dresses"
            render={props => <ProductList gender="ladies" category="dresses" />}
          />
          <Route path="/signup" render={props => <Register />} />
          <Route path="/login" render={props => <Login />} />
          <Route path="/product/:product_id" component={ProductPage} />
          <Route path="/cart" component={ShoppingCartWrapper} />
        </Switch>
        <ButtomBar />
      </div>
    );
  }
}

export default Routes;
