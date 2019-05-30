import React, { Component } from "react";
import _ from "lodash";
// import { Products } from "../../api/products";
import { withTracker } from "meteor/react-meteor-data";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.item.quantity,
      amount: undefined
    };
  }

  handleRemove() {
    // console.log(this.props.item._id);
    if (this.props.user) {
      Meteor.call("user.removeCartItem", this.props.item._id);
    } else {
      const tempCart = JSON.parse(localStorage.getItem("cart"));
      _.remove(tempCart, currentObject => {
        return currentObject.product_id === this.props.item.product_id;
      });
      localStorage.setItem("cart", JSON.stringify(tempCart));
      window.location.reload();
    }
  }

  componentDidMount() {
    // console.log(this.props.product);
    this.setState({ amount: this.state.quantity * this.state.price });
  }

  handleChangeQuantity(item) {
    if (this.state.quantity === 1 && item === -1) return;
    const newQuantity = this.state.quantity + item;
    this.setState({
      quantity: newQuantity
      // amount: newQuantity * this.state.price
    });
    Meteor.call("user.editCart", this.props.item._id, newQuantity);
  }

  render() {
    const { item, product } = this.props;
    return (
      <>
        {product && item && (
          <div className="cart-item">
            <div className="product">
              <img src={product.imgURL.main} />
              <div className="product-info">
                <div className="top">{product.title}</div>
                <div className="bot">
                  <p>Change</p>
                  <div className="horizontal-line" />
                  <p onClick={this.handleRemove.bind(this)}>Remove</p>
                </div>
              </div>
            </div>
            <div className="type">
              <div className="color" style={{ background: item.color }} />
            </div>
            <div className="type">
              <div className="size"> {item.size}</div>
            </div>
            <div className="type">
              <div className="quantity-button">
                <img
                  src="/minus.svg"
                  alt="-"
                  onClick={this.handleChangeQuantity.bind(this, -1)}
                />
                <p> {this.state.quantity}</p>
                <img
                  src="/plus.svg"
                  alt="+"
                  onClick={this.handleChangeQuantity.bind(this, 1)}
                />
              </div>
            </div>
            <div className="type">
              <div className="amount">
                {"$" + this.state.quantity * product.price}
              </div>
            </div>
          </div>
        )}

        <div className="cart-item-line" />
      </>
    );
  }
}
export default withTracker(() => {
  Meteor.subscribe("userData");
  const user = Meteor.user();
  return {
    user
  };
})(CartItem);
