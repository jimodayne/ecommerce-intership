import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginSeller from "./ui/Seller/LoginSeller";
import PrivateRoute from "./ui/Seller/PrivateRoute";
import NavContainer from "./ui/Components/Nav/NavContainer";
import ButtomBar from "./ui/Components/Nav/BottomBar";
import Homepage from "./ui/Main/Homepage";
import ProductPage from "./ui/Main/ProductPage";
import ProductList from "./ui/Main/ProductList";
// import Register from "./ui/Components/Nav/Register";
// import Login from "./ui/Components/Nav/Login";
import OrdersPage from "./ui/Main/OrdersPage";
import ShoppingCartWrapper from "./ui/Components/Cart/ShoppingCartWrapper";

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
              <Route path="/product/:product_id" component={ProductPage} />
              <Route path="/:gender/:kind" component={ProductList} />
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
