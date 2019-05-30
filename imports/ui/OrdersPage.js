import React, { Component } from "react";
import { Orders } from "../api/orders";
import { withTracker } from "meteor/react-meteor-data";
import OrderItem from "./Components/OrderItem";

class OrdersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="shopping-cart-wrap">
        <div className="cart-header">My Orders</div>
        <div className="cart-container" id="order">
          <div className="left-header">
            <p className="start">Order ID</p>
            <p className="start">Date</p>
            <p className="start">Detail</p>
            <p>Total</p>
            <p>Status</p>
            <p />
          </div>
          <div className="cart-line" />
          {this.props.orders
            ? this.props.orders.map((item, index) => {
                return <OrderItem key={index} order={item} />;
              })
            : "No order yet!"}
          
        </div>
      </div>
    );
  }
}

export default withTracker(props => {
  Meteor.subscribe("ordersUser");

  return {
    user: Meteor.user(),
    orders: Orders.find({}).fetch()
  };
})(OrdersPage);

// export default Orders;
