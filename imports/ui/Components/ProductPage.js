import React, { Component } from "react";
import { Products } from "../../api/products";
import { withTracker } from "meteor/react-meteor-data";
import _ from "lodash";
import StarRatingComponent from "react-star-rating-component";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: []
    };
    this.sizeArr = ["S", "M", "L"];
  }

  handleChangeSize(item) {
    if (_.includes(this.state.size, item)) {
      const newArr = _.remove(this.state.size, x => {
        return x !== item;
      });
      this.setState({ size: newArr });
    } else {
      this.setState({ size: [...this.state.size, item] });
    }
  }

  componentDidMount() {
    // const product = Products.findOne({ sku: params.product_id });
    // this.setState({ product: product });
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
                  <div className="review-num">
                    {" "}
                    {product.review.length} Review
                  </div>
                </div>
                <div className="size-header"> Size </div>
                <div className="size-body">
                  {this.sizeArr.map((item, index) => {
                    return _.includes(this.state.size, item) ? (
                      <div
                        key={index}
                        className="size-box-choosen"
                        onClick={this.handleChangeSize.bind(this, item)}
                      >
                        <p>{item}</p>
                      </div>
                    ) : (
                      <div
                        key={index}
                        className="size-box-normal"
                        onClick={this.handleChangeSize.bind(this, item)}
                      >
                        <p>{item}</p>
                      </div>
                    );
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
          </div>
        )}
      </>
    );
  }
}

export default withTracker(props => {
  const {
    match: { params }
  } = props;
  return {
    product: Products.findOne({ sku: params.product_id })
  };
})(ProductPage);
