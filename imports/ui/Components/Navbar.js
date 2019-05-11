import React, { Component } from "react";
import Dropdown from "./Dropdown";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Search",
      cart: 1,
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
          link: "#",
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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="nav-bar-primary">
        <div className="nav-top">
          <div className="nav-search">
            <form onSubmit={this.handleSubmit}>
              <label>
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>

              {/* <input type="submit" value="Submit" /> */}
            </form>
            <img src="/search.svg" className="Search" />
          </div>
          <div className="nav-logo">
            <img src="/logo.svg" className="Logo" />
          </div>

          <div className="nav-right">
            <button type="button" className="pri-button">
              Register
            </button>
            <button type="button" className="sec-button">
              Log in
            </button>
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
