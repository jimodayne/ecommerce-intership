import React, { Component } from "react";
import { Products } from "../../api/products";
import { withTracker } from "meteor/react-meteor-data";

class PopUpItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    const { item, product } = this.props;
    return (
      <>
        {product && item && (
          <div className="pop-up-item">
            <div className="left">
              <img src={product.imgURL.main} />
            </div>
            <div className="right">
              <div className="title"> {product.title}</div>
              <div className="price-quantity-wrap">
                <div className="price">
                  {"$" + product.price * item.quantity}
                </div>
                <div className="quantity-size">
                  {item.size + " . " + "Black" + " . " + item.quantity + " pcs"}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="pop-item-line" />
      </>
    );
  }
}

export default withTracker(props => {
  Meteor.subscribe("productsPublic");
  return {
    product: Products.findOne(
      { _id: props.item.product_id },
      { fields: { soldQuantity: 0, shipping_details: 0, reviews: 0 } }
    )
  };
})(PopUpItem);
