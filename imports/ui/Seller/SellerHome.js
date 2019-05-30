import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import SellerOrders from "./SellerOrders";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

import SellerOrders from "./SellerOrders";

class SellerHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="seller-wrap">
          <LeftNav />
          <RightNav />
          <Switch>
            <Route path="/seller" component={SellerOrders} />
            {/* <Route path="/seller/products" component={SellerProducts} />
          <Route path="/seller/products/add" component={SellerAddProducts} /> */}
          </Switch>
        </div>
      </>
    );
  }
}

export default SellerHome;
