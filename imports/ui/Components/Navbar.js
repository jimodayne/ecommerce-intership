import React, { Component } from "react";
import Dropdown from "./Dropdown";
import CartWrapper from "./CartWrapper";
// import { withTracker } from "meteor/react-meteor-data";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      error: "",
      show: false,
      showCartList: false,
      content: "",
      
      menObj: [
        {
          link: "#",
          title: "Tops"
        },
        {
          link: "#",
          title: "Bottoms"
        },
        {
          link: "#",
          title: "Shorts"
        },
        {
          link: "#",
          title: "Jackets"
        },
        {
          link: "#",
          title: "Shoes"
        },
        {
          link: "#",
          title: "Sale"
        }
      ],
      ladiesObj: [
        {
          link: "#",
          title: "Tops"
        },
        {
          link: "#",
          title: "Bottoms"
        },
        {
          link: "/ladies/dresses",
          title: "Dresses"
        },
        {
          link: "#",
          title: "Jackets"
        },
        {
          link: "#",
          title: "Shoes"
        },
        {
          link: "#",
          title: "Accessories"
        },
        {
          link: "#",
          title: "Sale"
        }
      ]
    };
  }

  logout(e) {
    e.preventDefault();
    Meteor.logout(err => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.props.history.push("/");
      }
    });
    this.setState({ show: false });
  }
  toggleList() {
    this.setState({ show: !this.state.show });
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
              <div className="nav-user">
                <img
                  src={this.props.user.profile.imgURL}
                  className="avatar"
                  alt="avatar"
                  onClick={this.toggleList.bind(this)}
                />
                {this.state.show && (
                  <div className="dropdown-user">
                    {/* <Link>Account setting</Link> */}
                    <div className="drop-nav-line" />
                    <Link to="/" onClick={this.logout.bind(this)}>
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="nav-guest">
                <button type="button" className="pri-button">
                  Register
                </button>
                <button type="button" className="sec-button">
                  {/* <Link to "/login" >   Log in</Link>
                   */}
                  <Link to="/login">Log in</Link>
                </button>
              </div>
            )}

            {this.props.user ? (
              <div
                className="nav-cart"
                onClick={this.toggleCartList.bind(this)}
              >
                <div className="cart-cir">
                  {this.props.user.cart ? (
                    <div className="cart-num">
                      {this.props.user.cart.length}{" "}
                    </div>
                  ) : (
                    ""
                  )}
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
