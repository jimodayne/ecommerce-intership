import React, { Component } from "react";
import Dropdown from "./Dropdown";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Meteor } from "meteor/meteor";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Search",
      cart: 1,
      userLogin: false,
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
          <div className="nav-logo">
            <Link to="/">
              <img src="/logo.svg" className="Logo" />
            </Link>
          </div>

          <div className="nav-right">
            <div className="nav-guest">
              <button type="button" className="pri-button">
                Register
              </button>
              <button type="button" className="sec-button">
                Log in
              </button>
            </div>

            <div className="nav-cart">
              <div className="cart-cir">
                <div className="cart-num">{this.state.cart} </div>
              </div>
              <img src="/cart.svg" className="Cart" />
            </div>
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
