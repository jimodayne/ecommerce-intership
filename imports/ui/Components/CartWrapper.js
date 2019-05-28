import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
import CartPopUp from "./CartPopUp";

class CartWrapper extends Component {
  constructor(props) {
    super(props);
  }

  handleClickOutside = evt => {
    this.props.toggleHideList();
  };

  render() {
    return <>{this.props.showCartList && <CartPopUp handleClickOutside={this.handleClickOutside.bind(this)} />}</>;
  }
}

export default onClickOutside(CartWrapper);
