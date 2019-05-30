import React, { Component } from "react";

class BottomBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="bottom-nav">
        <div className="nav-line" />
        <div className="bottom-nav-mid">
          <div className="baseline" />
          <div className="bottom-wrap">
            <img src="/logo.svg" className="LogoBottom" />

            <ul className="bot-nav-lst">
              <li>Home</li>
              <li>Products</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Help</li>
              <li>Contact</li>
            </ul>

            <div className="icon">
              <img src="/twitter-icon.svg" />
              <img src="/facebook-icon.svg" />
              <img src="/instagram-6-icon.svg" />
            </div>
          </div>

          <div className="nav-line-new" />

          <div className="bottom-nav-bot">
            <ul className="left">
              <li>Home</li>
              <li>Products</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Help</li>
              <li>Contact</li>
            </ul>
            <ul className="right">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default BottomBar;
