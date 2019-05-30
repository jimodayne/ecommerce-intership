import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import SellerOrders from "./SellerOrders";

class SellerHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Switch>
          <Route path="/seller" component={SellerOrders} />
          {/* <Route path="/seller/products" component={SellerProducts} />
          <Route path="/seller/products/add" component={SellerAddProducts} /> */}
        </Switch>
      </>
    );
  }
}

export default SellerHome;
