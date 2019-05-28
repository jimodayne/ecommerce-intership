import React, { Component } from "react";
import Card from "../ui/Components/Card";
import { Products } from "../api/products";
import { withTracker } from "meteor/react-meteor-data";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="gallery-wrapper">
        {this.props.cardList.length
          ? this.props.cardList.map((item, index) => {
              return (
                <Card
                  key={index}
                  sku={item.sku}
                  name={item.title}
                  imgURL={item.imgURL.main}
                  price={item.price.toString()}
                  soldOut={item.soldOut}
                  user_id={this.props.user}
                />
              );
            })
          : ""}
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("products");

  return {
    user: Meteor.user(),
    cardList: Products.find(
      {},
      { fields: { title: 1, sku: 1, imgURL: 1, soldOut: 1, price: 1 } }
    ).fetch()
  };
})(Gallery);
