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
      show: true
    };
  }

  handleClick() {
    this.props.handleClickOutside();
  }

  //   componentWillUnmount() {}

  render() {
    return (
      <div className="cart-pop-up-wrapper">
        {this.props.user.cart
          ? this.props.user.cart.map((item, index) => {
              return <PopUpItem key={index} item={item} />;
            })
          : ""}
        {/* <PopUpItem /> */}
        <Link to="/cart" onClick={this.handleClick.bind(this)}>
          <div className="view-cart">
            <p>View cart</p>
          </div>
        </Link>
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
