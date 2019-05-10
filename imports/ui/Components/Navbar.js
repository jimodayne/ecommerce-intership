import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Search",
      cart: 1
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
          <div className="nav-dropdown">
            <button className="dropbtn">Men</button>
            {/* <div className="dropdown-content" id="menDropdown">
              <a href="#">Tops</a>
              <a href="#">Bottoms</a>
              <a href="#">Shorts</a>
              <a href="#">Shoes</a>
              <a href="#">Sale</a>
            </div> */}
            <img src="/arrow.svg" className="Arrow" />
          </div>
          <div className="nav-dropdown">
            <button className="dropbtn">Ladies</button>
            <div className="dropdown-content" id="menDropdown">
              <a href="#">Tops</a>
              <a href="#">Bottoms</a>
              <a href="#">Dresses</a>
              <a href="#">Jackets</a>
              <a href="#">Shoes</a>
              <a href="#">Accesories</a>
              <a href="#">Sale</a>
            </div>
            <img src="/arrow.svg" className="Arrow" />
          </div>

          <div className="nav-dropdown">
            Girls
            <img src="/arrow.svg" className="Arrow" />
          </div>
          <div className="nav-dropdown">
            Boys
            <img src="/arrow.svg" className="Arrow" />
          </div>
        </div>
        <div className="nav-line" />
      </div>
    );
  }
}

export default Navbar;
