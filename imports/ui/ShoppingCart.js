import React, { Component } from "react";
import CartItem from "./Components/CartItem";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="shopping-cart-wrap">
        <div className="cart-header">My Bag</div>
        <div className="cart-container">
          <div className="left-wrap">
            <div className="left-header">
              <p id="product">Product</p>
              <p>Color</p>
              <p>Size</p>
              <p>Quantity</p>
              <p>Amount</p>
            </div>
            <div className="cart-line" />
            <CartItem />
          </div>

          <div className="right">Total</div>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
