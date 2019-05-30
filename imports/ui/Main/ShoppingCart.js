import React, { Component } from "react";
import CartItem from "../Components/Cart/CartItem";
import _ from "lodash";
// import { BrowserRouter as Router } from "react-router-dom";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipingpFee: 0,
      total: 0,
      subtotal: 0
    };
  }

  handleCheckOut() {
    if (this.props.user) {
      if (!this.props.user.cart) {
        alert("No product!");
        return;
      }

      Meteor.call(
        "orders.addNew",
        this.props.user.cart,
        this.props.products,
        (err, res) => {
          if (err) {
            alert(err);
          } else {
            alert("Order placed!");
            this.props.history.push("/myorder");
          }
        }
      );
    } else {
      if (!JSON.parse(localStorage.getItem("cart"))) {
        alert("No product!");
        return;
      }
      alert("Please log in!");
    }
  }

  render() {
    const { user, products } = this.props;
    const tempCart = JSON.parse(localStorage.getItem("cart"));
    const haveItemInLocal = !!(tempCart && tempCart[0]);

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

            {products && user && user.cart
              ? user.cart.map((item, index) => {
                  const product = _.find(products, o => {
                    return o._id.toString() === item.product_id.toString();
                  });
                  return <CartItem item={item} key={index} product={product} />;
                })
              : haveItemInLocal &&
                tempCart.map((item, index) => {
                  const product = _.find(products, o => {
                    return o._id.toString() === item.product_id.toString();
                  });
                  return <CartItem item={item} key={index} product={product} />;
                })}
          </div>
          <div className="right">
            <div className="header">Total</div>
            <div className="total-wrapper">
              <div className="total-item">
                <div className="title">Shipping & Handling:</div>
                <div className="content">Free</div>
              </div>

              <div className="total-item">
                <div className="title">Total product:</div>
                <div className="content">
                  {"$" + products && user && user.cart
                    ? user.cart.reduce((lst, item) => {
                        const product = _.find(products, o => {
                          return (
                            o._id.toString() === item.product_id.toString()
                          );
                        });
                        return product
                          ? lst + product.price * item.quantity
                          : "";
                      }, 0)
                    : haveItemInLocal &&
                      tempCart.reduce((lst, item) => {
                        const product = _.find(products, o => {
                          return (
                            o._id.toString() === item.product_id.toString()
                          );
                        });
                        return product
                          ? lst + product.price * item.quantity
                          : "";
                      }, 0)}
                </div>
              </div>
              <div className="total-line" />
              <div className="total-item" id="bold">
                <div className="title">Subtotal</div>
                <div className="content">
                  {"$" +
                    (this.state.shipingpFee + products && user && user.cart
                      ? user.cart.reduce((lst, item) => {
                          const product = _.find(products, o => {
                            return (
                              o._id.toString() === item.product_id.toString()
                            );
                          });
                          return product
                            ? lst + product.price * item.quantity
                            : "";
                        }, 0)
                      : haveItemInLocal &&
                        tempCart.reduce((lst, item) => {
                          const product = _.find(products, o => {
                            return (
                              o._id.toString() === item.product_id.toString()
                            );
                          });
                          return product
                            ? lst + product.price * item.quantity
                            : "";
                        }, 0))}
                </div>
              </div>
            </div>
            <button onClick={this.handleCheckOut.bind(this)}>Check out</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
