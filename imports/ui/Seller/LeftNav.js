import React, { Component } from "react";

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="seller-nav-left-wrapper">
        <div className="seller-logo">
          <img src="/logo.svg" alt="big-logo" />
        </div>
        <div className="seller-controller">
          <div className="function-wrapper">
            <img src="/overview-dark.svg" />
            <p>Overview</p>
          </div>
          <div className="function-wrapper">
            <img src="/orders-dark.svg" />
            <p>Orders</p>
          </div>
          <div className="function-wrapper">
            <img src="/products-orange.svg" />
            <p>Products</p>
          </div>
          <div className="function-wrapper">
            <img src="/payment-dark.svg" />
            <p>Payments</p>
          </div>
          <div className="function-wrapper">
            <img src="/promotion-dark.svg" />
            <p>Promotions</p>
          </div>
          <div className="function-wrapper">
            <img src="/setting-dark.svg" />
            <p>Setting</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftNav;
