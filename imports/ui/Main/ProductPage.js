import React, { Component } from "react";
import { Products } from "../../api/products"; //
import { withTracker } from "meteor/react-meteor-data";
// import _ from "lodash";
import Reviews from "../Components/Reviews";
import StarRatingComponent from "react-star-rating-component";


class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "",
      quantity: 1,
      page: 1,
      color: ""
    };
    this.sizeArr = ["S", "M", "L"];
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  handleChangeSize(item) {
    if (item === this.state.size) this.setState({ size: "" });
    else this.setState({ size: item });
  }

  handleChooseColor(color) {
    this.setState({ color: color });
  }

  handleChangePage(amount) {
    if (amount === -1 && this.state.page === 1) return;
    // if (amount === 1 && this.state.page === this.state.maxPage) return;
    const newpage = this.state.page + amount;
    this.setState({ page: newpage });
  }

  handleAddToCard(e) {
    if (!this.state.size) {
      alert("Please choose the size");
      return;
    }
    if (!this.state.color) {
      alert("Please choose the color");
      return;
    }
    const newItem = {
      product_id: this.props.product._id,
      size: this.state.size,
      quantity: this.state.quantity,
      color: this.state.color
    };

    if (this.props.user) {
      Meteor.call("user.addCart", newItem, (err, res) => {
        if (err) {
          alert(err);
        }
      });
    } else {
      const arr = JSON.parse(localStorage.getItem("cart"));
      arr.push(newItem);
      localStorage.setItem("cart", JSON.stringify(arr));
      window.location.reload();
    }

    // console.log(newItem);
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
        {product && product.type && (
          <div className="product-page-wrapper">
            <div className="product-top-wrap">
              {product.type.gender +
                " / " +
                product.type.kind +
                " / " +
                product.title}
            </div>
            <div className="product-mid-wrap">
              <div className="first-col">
                {product.imgURL.alt1 && (
                  <img src={product.imgURL.alt1} alt="alt-pic" />
                )}
                {product.imgURL.alt2 && (
                  <img src={product.imgURL.alt2} alt="alt-pic" />
                )}
                {product.imgURL.alt3 && (
                  <img src={product.imgURL.alt3} alt="alt-pic" />
                )}
                {product.imgURL.alt4 && (
                  <img src={product.imgURL.alt4} alt="alt-pic" />
                )}
              </div>
              <div className="sec-col">
                <img src={product.imgURL.main} alt="main-pic" />
              </div>
              <div className="third-col">
                <div className="product-title">{product.title}</div>
                <div className="product-price">${product.price}</div>
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
                    return this.state.color === item ? (
                      <div
                        className="color-choosen"
                        key={key}
                        style={styles}
                        onClick={this.handleChooseColor.bind(this, item)}
                      />
                    ) : (
                      <div
                        className="color"
                        key={key}
                        style={styles}
                        onClick={this.handleChooseColor.bind(this, item)}
                      />
                    );
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

                <button
                  onClick={this.handleAddToCard.bind(this)}
                  id="add-to-cart"
                >
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
                {product.imgURL.alt1 && (
                  <img src={product.imgURL.alt1} alt="alt-pic" />
                )}
                {product.imgURL.alt2 && (
                  <img src={product.imgURL.alt2} alt="alt-pic" />
                )}

                {/* <img src={product.imgURL.alt2} alt="alt-pic" />
                <img src={product.imgURL.alt1} alt="alt-pic" />
                <img src={product.imgURL.alt2} alt="alt-pic" /> */}
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
  Meteor.subscribe("moreInformationProduct");
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
