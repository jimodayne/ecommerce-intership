import React, { Component } from "react";
import { Products } from "../api/products";
import { withTracker } from "meteor/react-meteor-data";
// import _ from "lodash";
import Reviews from "./Components/Reviews";
import StarRatingComponent from "react-star-rating-component";
// import { relativeTimeThreshold } from "moment";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "",
      quantity: 1,
      page: 1,
      maxPage: 7
    };
    this.sizeArr = ["S", "M", "L"];
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  handleChangeSize(item) {
    if (item === this.state.size) this.setState({ size: "" });
    else this.setState({ size: item });
  }

  handleChangePage(amount) {
    if (amount === -1 && this.state.page === 1) return;
    if (amount === 1 && this.state.page === this.state.maxPage) return;
    const newpage = this.state.page + amount;
    this.setState({ page: newpage });
  }

  handleAddToCard() {
    if (!this.state.size) {
      alert("Please choose the size")
      return
    }
    const newItem = {
      _id: this.props.product._id,
      size: this.state.size,
      quantity: this.state.quantity
    };
  
    console.log(newItem);
  }

  handleChangeQuantity(item) {
    if (this.state.quantity === 1 && item === -1) return;
    const newQuantity = this.state.quantity + item;
    this.setState({ quantity: newQuantity });
  }
  render() {
    const { product } = this.props;
    // const { title, model_info } = product;
    return (
      <>
        {product && (
          <div className="product-page-wrapper">
            <div className="product-top-wrap">
              {product.categories.join(" / ") + " / " + product.title}
            </div>
            <div className="product-mid-wrap">
              <div className="first-col">
                <img src={product.imgURL.alt1} alt="alt-pic" />
                <img src={product.imgURL.alt2} alt="alt-pic" />
                <img src={product.imgURL.alt1} alt="alt-pic" />
                <img src={product.imgURL.alt2} alt="alt-pic" />
              </div>
              <div className="sec-col">
                <img src={product.imgURL.main} alt="main-pic" />
              </div>
              <div className="third-col">
                <div className="product-title">{product.title}</div>
                <div className="product-price">${product.pricing.price}</div>
                <div className="product-review">
                  <StarRatingComponent
                    name="star-rate"
                    editing={false}
                    // renderStarIcon={() => <img src="/star.svg" />}
                    value={product.rating}
                    emptyStarColor="#D4D3D3"
                    starColor="#FFD543"
                  />
                  <div className="vertical-line" />
                  <div className="review-num">{product.reviewCount} Review</div>
                </div>
                <div className="size-header"> Size </div>
                <div className="size-body">
                  {this.sizeArr.map((item, index) => {
                    if (product.size[item] === 0) {
                      return (
                        <div key={index} className="size-box-empty">
                          <p>{item}</p>
                        </div>
                      );
                    } else {
                      if (this.state.size === item)
                        return (
                          <div
                            key={index}
                            className="size-box-choosen"
                            onClick={this.handleChangeSize}
                          >
                            <p>{item}</p>
                          </div>
                        );
                      else {
                        return (
                          <div
                            key={index}
                            className="size-box-normal"
                            onClick={this.handleChangeSize.bind(this, item)}
                          >
                            <p>{item}</p>
                          </div>
                        );
                      }
                    }
                  })}
                </div>
                <div className="size-header"> Color </div>
                <div className="color-wrap">
                  {product.color.map((item, key) => {
                    const styles = { background: item };
                    return <div className="color" key={key} style={styles} />;
                  })}
                </div>
                <div className="quantity-wrap">
                  <div className="header"> Quantity </div>
                  <div className="quantity-button">
                    <img
                      src="/minus.svg"
                      alt="-"
                      onClick={this.handleChangeQuantity.bind(this, -1)}
                    />
                    <p> {this.state.quantity}</p>
                    <img
                      src="/plus.svg"
                      alt="+"
                      onClick={this.handleChangeQuantity.bind(this, 1)}
                    />
                  </div>
                </div>

                <button onClick={this.handleAddToCard.bind(this)}>
                  Add to cart
                </button>
                <hr />
                <div className="model">
                  <b> Model wearing size {product.model_info.size}</b>
                  <div> Chest: {product.model_info.chest}</div>
                  <div> Length: {product.model_info.length}</div>
                </div>
              </div>
              <div className="forth-col">
                <div>More from {product.brand}</div>
                <img src={product.imgURL.alt1} alt="alt-pic" />
                <img src={product.imgURL.alt2} alt="alt-pic" />
                <img src={product.imgURL.alt1} alt="alt-pic" />
                <img src={product.imgURL.alt2} alt="alt-pic" />
              </div>
            </div>
            <Reviews id={product._id} />
          </div>
        )}
      </>
    );
  }
}

export default withTracker(props => {
  Meteor.subscribe("products");
  const {
    match: { params }
  } = props;
  return {
    user: Meteor.user(),
    product: Products.findOne(
      { sku: params.product_id },
      { fields: { soldQuantity: 0, shipping_details: 0, reviews: 0 } }
    )
  };
})(ProductPage);

// export default ProductPage;
