import React, { Component } from "react";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="homepage">
        <div className="home-wrap-top">
          <img src="/1.jpg" />
          <p>outfit of the week</p>
          <button> Shop now</button>
        </div>
        <div className="home-wrap-bottom">
          <div className="item">
            <a href="#">
              <img src="/4.jpeg" />
              <p>Men</p>
              <div className="line" />
              <button> Shop now</button>
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src="/4.jpeg" />
              <p>Ladies</p>
              <div className="line" />
              <button> Shop now</button>
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src="/4.jpeg" />
              <p>Girls</p>
              <div className="line" />
              <button> Shop now</button>
            </a>
          </div>
          <div className="item">
            <a href="#">
              <img src="/4.jpeg" />
              <p>Boys</p>
              <div className="line" />
              <button> Shop now</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
