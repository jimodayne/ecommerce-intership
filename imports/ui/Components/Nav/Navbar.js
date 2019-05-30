import React, { Component } from "react";
import Dropdown from "./Dropdown";
import CartWrapper from "../Cart/CartWrapper";
// import { withTracker } from "meteor/react-meteor-data";
import { Link } from "react-router-dom";
import Login from "./Login";
import Portal from "./Portal";
import Register from "./Register";
import UserComponent from "./UserComponent";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: 0,
      error: "",
      show: false,
      loginShow: false,
      registerShow: false,
      showCartList: false,
      content: "",
      menObj: ["tops", "bottoms", "shorts", "jackets", "shoes", "sale"],
      ladiesObj: [
        "tops",
        "bottoms",
        "dresses",
        "jackets",
        "shoes",
        "accessories",
        "sale"
      ]
    };
    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleRegister = this.toggleRegister.bind(this);
  }
  componentDidMount() {
    if (!this.props.user) {
      if (!localStorage.getItem("cart")) {
        // Initialize local storage
        const arr = [];
        arr.push(JSON.parse(localStorage.getItem("cart")));
        localStorage.setItem("cart", JSON.stringify(arr));
      } else {
        const arr = JSON.parse(localStorage.getItem("cart"));
        if (!arr[0]) arr.shift();
        localStorage.setItem("cart", JSON.stringify(arr));
        this.setState({ cart: arr.length });
      }
    }
  }

  componentDidUpdate() {
    if (this.props.user) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      if (cart && cart[0]) {
        for (const item of cart) {
          Meteor.call("user.addCart", item, (err, res) => {
            if (err) {
              console.log(err);
            }
          });
          // }
        }

        const arr = [];
        localStorage.setItem("cart", JSON.stringify(arr));
      }
    }
  }

  toggleCartList() {
    this.setState({ showCartList: !this.state.showCartList });
  }

  toggleHideList() {
    this.setState({ showCartList: false });
  }

  handleChange(event) {
    this.setState({ content: event.target.value });
  }

  toggleLogin() {
    this.setState({ loginShow: !this.state.loginShow });
  }
  toggleRegister() {
    this.setState({ registerShow: !this.state.registerShow });
  }

  handleKeyPress(event) {
    if (event.key !== "Enter") return;
    if (this.state.content === "") return;
    // this.handleSend();
    // console.log(this.state.content);
    this.setState({ content: "" });
  }

  render() {
    return (
      <div className="nav-bar-primary">
        <Portal target="log-in-target">
          {this.state.loginShow && (
            <Login
              toggleLogin={this.toggleLogin}
              toggleRegister={this.toggleRegister}
            />
          )}
        </Portal>

        <Portal target="log-in-target">
          {this.state.registerShow && (
            <Register
              toggleLogin={this.toggleLogin}
              toggleRegister={this.toggleRegister}
            />
          )}
        </Portal>

        <div className="nav-top">
          <div className="nav-search">
            <input
              type="text"
              placeholder="Search"
              value={this.state.content}
              onChange={this.handleChange.bind(this)}
              onKeyPress={this.handleKeyPress.bind(this)}
            />

            <img src="/search.svg" className="Search" />
          </div>
          <Link to="/">
            <div className="nav-logo">
              <img src="/logo.svg" className="Logo" />
            </div>
          </Link>
          <div className="nav-right">
            {this.props.user ? (
              <UserComponent
                avatar={
                  this.props.user.profile.imgURL
                    ? this.props.user.profile.imgURL
                    : "/avatar_def.svg"
                }
              />
            ) : (
              <div className="nav-guest">
                <button
                  type="button"
                  className="pri-button"
                  onClick={this.toggleRegister.bind(this)}
                >
                  Register
                </button>
                <button
                  type="button"
                  className="sec-button"
                  onClick={this.toggleLogin.bind(this)}
                >
                  {/* <Link to "/login" >   Log in</Link>
                   */}
                  {/* <Link to="/login">Log in</Link> */}
                  Log in
                </button>
              </div>
            )}

            {this.props.user ? (
              <div
                className="nav-cart"
                onClick={this.toggleCartList.bind(this)}
              >
                <div className="cart-cir">
                  <div className="cart-num">
                    {this.props.user.cart ? this.props.user.cart.length : 0}
                  </div>
                </div>
                <img src="/cart.svg" className="Cart" />
              </div>
            ) : (
              <div
                className="nav-cart"
                onClick={this.toggleCartList.bind(this)}
              >
                <div className="cart-cir">
                  <div className="cart-num">{this.state.cart} </div>
                </div>
                <img src="/cart.svg" className="Cart" />
              </div>
            )}
            {this.state.showCartList && (
              <CartWrapper
                showCartList={this.state.showCartList}
                toggleHideList={this.toggleHideList.bind(this)}
              />
            )}
          </div>
        </div>
        <div className="nav-line" />
        <div className="nav-bottom">
          <Dropdown title="Men" list={this.state.menObj} />
          <Dropdown title="Ladies" list={this.state.ladiesObj} />
          <Dropdown title="Girls" list={this.state.ladiesObj} />
          <Dropdown title="Boys" list={this.state.menObj} />
        </div>
        <div className="nav-line" />
      </div>
    );
  }
}

export default Navbar;
