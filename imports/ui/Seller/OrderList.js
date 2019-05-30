import React, { Component } from "react";
import OrderSellerItem from "./OrderSellerItem";

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {this.props.orders &&
          this.props.orders.map((item, index) => {
            return <OrderSellerItem order={item} key={index} />;
          })}{" "}
      </>
    );
  }
}

export default OrderList;
