import React, { Component } from "react";
import { Orders } from "../../api/orders";
import { withTracker } from "meteor/react-meteor-data";
import OrderWrapper from "./OrderWrapper";

class SellerOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }
  render() {
    return (
      <div className="seller-container">
        <div className="heading"> Orders </div>

        <div className="seller-orders-list">
          <div className="seller-order-header">
            <p> Order ID</p>
            <p className="start"> Order Date</p>
            <p className="start"> Detail</p>
            <p> Total ($)</p>
            <p> Status</p>
          </div>
          <div className="end-line" />
          <OrderWrapper page={this.state.page} />
        </div>
      </div>
    );
  }
}

export default SellerOrders;
