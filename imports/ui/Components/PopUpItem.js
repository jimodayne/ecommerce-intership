import React, { Component } from "react";
import { Products } from "../../api/products";
import { withTracker } from "meteor/react-meteor-data";

class PopUpItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "New Balance Men's Street Backpack"
    };
  }
  render() {
    const { item, product } = this.props;
    return (
      <>
        {product && item && (
          <div className="pop-up-item">
            <div className="left">
              <img src="/rectangle-copy-54.jpg" />
            </div>
            <div className="right">
              <div className="title"> {product.title}</div>
              <div className="price-quantity-wrap">
                <div className="price">
                  {"$" + product.pricing.price * item.quantity}
                </div>
                <div className="quantity-size">
                  {item.size + " . " + "Black" + " . " + item.quantity + " pcs"}
                </div>
              </div>
            </div>
          </div>
       
        )}
           <div  className="pop-item-line"/>
      </>
    );
  }
}

export default withTracker(props => {
  Meteor.subscribe("products");

  return {
    product: Products.findOne(
      { _id: props.item._id },
      { fields: { title: 1, pricing: 1, imgURL: 1 } }
    )
  };
})(PopUpItem);
