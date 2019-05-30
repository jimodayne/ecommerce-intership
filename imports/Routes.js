import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import { Meteor } from "meteor/meteor";
import PrivateRoute from "./ui/Seller/PrivateRoute";
import Homepage from "./ui/Homepage";
import SellerHome from "./ui/Seller/SellerHome";
import NavContainer from "./ui/Components/NavContainer";
import ButtomBar from "./ui/Components/BottomBar";
import ProductList from "./ui/ProductList";
import Register from "./ui/Components/Register";
import Login from "./ui/Components/Login";
import ProductPage from "./ui/ProductPage";
import ShoppingCartWrapper from "./ui/ShoppingCartWrapper";
import LoginSeller from "./ui/Seller/LoginSeller";
import OrdersPage from "./ui/OrdersPage";

class Routes extends Component {
  render() {
    return (
      <div className="app">
        <div className="log-in-target" />
        <Switch>
          <PrivateRoute path="/seller" />
          <Route path="/loginSeller" component={LoginSeller} />
          <>
            <NavContainer />
            <Switch>
              <Route exact path="/" component={Homepage} />
              {/* <Route
                path="/ladies/dresses"
                render={props => (
                  <ProductList gender="ladies" category="dresses" />
                )}
              /> */}
              <Route path="/product/:product_id" component={ProductPage} />
              <Route path="/:gender/:kind" component={ProductList} />
              <Route path="/signup" render={props => <Register />} />
              <Route path="/login" render={props => <Login />} />
              <Route path="/myorder" render={props => <OrdersPage />} />

              <Route path="/cart" component={ShoppingCartWrapper} />
            </Switch>
            <ButtomBar />
          </>
        </Switch>

        {/* 

         */}
      </div>
    );
  }
}

export default Routes;
