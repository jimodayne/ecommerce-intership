import React, { Component } from "react";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgURL: "/rectangle-copy-54@3x.jpg",
      title: "Collete Stretch Linen Minidress",
      color: "rgba(255, 195, 113, 0.5)",
      size: "S",
      quantity: 1,
      price: 69,
      amount: undefined
    };
  }

  componentDidMount() {
    this.setState({ amount: this.state.quantity * this.state.price });
  }

  handleChangeQuantity(item) {
    if (this.state.quantity === 1 && item === -1) return;
    const newQuantity = this.state.quantity + item;
    this.setState({
      quantity: newQuantity,
      amount: newQuantity * this.state.price
    });
  }

  render() {
    return (
      <>
        <div className="cart-item">
          <div className="product">
            <img src={this.state.imgURL} />
            <div className="product-info">
              <div className="top">{this.state.title}</div>
              <div className="bot">
                <p>Change</p>
                <div className="horizontal-line" />
                <p>Remove</p>
              </div>
            </div>
          </div>
          <div className="type">
            <div className="color" style={{ background: this.state.color }} />
          </div>
          <div className="type">
            <div className="size"> {this.state.size}</div>
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
            <div className="amout"> {"$" + this.state.amount}</div>
          </div>
        </div>
        <div className="cart-item-line" />
      </>
    );
  }
}

export default CartItem;
