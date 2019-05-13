import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card-holder">
        <div className="card-top">
          <img src={this.props.imgURL} />
        </div>
        <div className="card-bottom">
          <div className="card-name">{this.props.name}</div>
          <div className="card-price">{"$" + this.props.price}</div>
        </div>
      </div>
    );
  }
}

export default Card;
