import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static get propTypes() {
    return {
      imgURL: PropTypes.string,
      price: PropTypes.string,
      name: PropTypes.string,
      soldOut: PropTypes.bool
    };
  }

  render() {
    return (
      <div className="card-holder">
        <div className="card-top">
          <img src={this.props.imgURL} />
        </div>
        <Link to={`/product/${this.props.sku}`}>
          <div className="card-bottom">
            <div className="card-name">{this.props.name}</div>
            <div className="card-price">{"$" + this.props.price}</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Card;
