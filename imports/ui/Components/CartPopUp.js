import React, { Component } from "react";
import { Link } from "react-router-dom";
import PopUpItem from "./PopUpItem";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
// import { Products } from "../../api/products";

class CartPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      cart: []
    };
  }

  handleClick() {
    this.props.handleClickOutside();
  }

  componentDidMount() {
    if (!this.props.user) {
      this.setState({ cart: JSON.parse(localStorage.getItem("cart")) });
    }
  }

  render() {
    return (
      <div className="cart-pop-up-wrapper">
        {this.props.user ? (
          this.props.user.cart ? (
            <>
              {this.props.user.cart.map((item, index) => {
                return <PopUpItem key={index} item={item} />;
              })}
              <Link to="/cart" onClick={this.handleClick.bind(this)}>
                <div className="view-cart">
                  <p>View cart</p>
                </div>
              </Link>
            </>
          ) : (
            <div className="view-cart">
              <p>No item</p>
            </div>
          )
        ) : this.state.cart.length ? (
          <>
            {this.state.cart.map((item, index) => {
              return <PopUpItem key={index} item={item} />;
            })}

            <Link to="/cart" onClick={this.handleClick.bind(this)}>
              <div className="view-cart">
                <p>View cart</p>
              </div>
            </Link>
          </>
        ) : (
          <div className="view-cart">
            <p>No item</p>
          </div>
        )}
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("userData");
  const user = Meteor.user();

  return {
    user
  };
})(CartPopUp);
