import React, { Component } from "react";
import _ from "lodash";
import Gallery from "../Components/Gallery";
import PropTypes from "prop-types";
import faker from "faker";
import nanoid from "nanoid";
import titleize from "titleize";
import rn from "random-number";
import { Meteor } from "meteor/meteor";
import { Components } from "../../api/components";
import { withTracker } from "meteor/react-meteor-data";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "Popularity",
      size: [],
      showSize: false,
      color: undefined,
      brand: undefined,
      price: undefined,
      avail: undefined,
      sortShow: false,
      page: 1,

      type: "All dresses",
      cart: 0
    };
    this.sizeArr = ["S", "M", "L"];
    this.colorArr = [
      "#ff5f6d",
      "rgba(255, 213, 67, 0.4)",
      "rgba(95, 109, 255, 0.4)",
      "rgba(255, 161, 95, 0.4)"
    ];
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  static get propTypes() {
    return {
      gender: PropTypes.string,
      category: PropTypes.string
    };
  }

  handleShowSort() {
    this.setState({ sortShow: !this.state.sortShow });
  }

  handleChangePage(amount) {
    if (this.state.page === 1 && amount === -1) return;
    this.setState({ page: this.state.page + amount });
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
  createRandomData() {
    // console.log("hello world!");
    // console.log(titleize(faker.lorem.words()));
    const tempColor = [
      "#ff5f6d",
      "rgba(255, 195, 113, 0.5)",
      "rgba(95, 109, 255, 0.5)",
      "rgba(255, 161, 95, 0.5)",
      "rgba(61, 61, 63, 0.5)",
      "rgba(237, 237, 237, 0.5)"
    ];

    const tempCato = [
      "Skinny",
      "Super Skinny",
      "Straight",
      "Slim Straight",
      "Skinny Carrot",
      "Tapered",
      "Shorts"
    ];
    const {
      props: {
        match: {
          params: { gender, kind }
        }
      }
    } = this;
    const newProduct = {
      sku: nanoid(10),
      title: titleize(faker.lorem.words()),
      model_info: {
        size: "L",
        chest: 24,
        length: 31
      },
      soldQuantity: rn({ min: 1, max: 30, integer: true }),
      imgURL: {
        main: `https://picsum.photos/id/${rn({
          min: 10,
          max: 30,
          integer: true
        })}/657/987`,
        alt1: `https://picsum.photos/id/${rn({
          min: 10,
          max: 30,
          integer: true
        })}/657/987`,
        alt2: `https://picsum.photos/id/${rn({
          min: 10,
          max: 30,
          integer: true
        })}/657/987`,
        alt3: `https://picsum.photos/id/${rn({
          min: 10,
          max: 30,
          integer: true
        })}/657/987`,
        alt4: `https://picsum.photos/id/${rn({
          min: 10,
          max: 30,
          integer: true
        })}/657/987`
      },
      soldOut: false,
      size: {
        S: rn({ min: 0, max: 20, integer: true }),
        L: rn({ min: 0, max: 20, integer: true }),
        M: rn({ min: 0, max: 20, integer: true })
      },
      color: [
        tempColor[rn({ min: 0, max: 2, integer: true })],
        tempColor[rn({ min: 3, max: 5, integer: true })]
      ],
      rating: 4,
      reviewCount: 0,
      price: rn({ min: 10, max: 99, integer: false }).toFixed(2),

      reviews: [],
      categories: [
        tempCato[rn({ min: 0, max: 3, integer: true })],
        tempCato[rn({ min: 4, max: 6, integer: true })]
      ],
      brand: "Zara",
      type: { gender: gender, kind: kind }
    };
    // console.log(newProduct);
    Meteor.call("products.addNew", newProduct);
  }

  // componentDidMount() {
  //   const {
  //     props: {
  //       match: {
  //         params: { gender, kind }
  //       }
  //     }
  //   } = this;
  // }
  showSize() {
    this.setState({ showSize: !this.state.showSize });
  }
  render() {
    const {
      props: {
        match: {
          params: { gender, kind }
        }
      }
    } = this;

    // console.log(gender, kind);

    return (
      <div className="product-lst">
        <div className="product-header">
          {gender + " / " + kind}
          {/* <button onClick={this.createRandomData.bind(this)}>
            Create random data!
          </button> */}
        </div>
        <div className="product-wrap">
          <div className="left-warper">
            <div className="category">Category</div>
            <div className="all-item"> {`All ${kind}`}</div>
            <div className="smaller-line" />
            <ul>
              {this.props.component &&
                this.props.component.categories &&
                this.props.component.categories.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              {/* <li>All dresses</li>
              <li>Rompers / Jumpsuits</li>
              <li>Casual dresses</li>
              <li>Going out dresses</li>
              <li>Party / Ocassion dresses</li>
              <li>Mini dresses</li>
              <li>Maxi / Midi dresses</li>
              <li>Sets</li> */}
            </ul>
            <div className="small-line" />
            <div className="category">Filter</div>

            <div className="filter-item">
              <div className="wrap-header" onClick={this.showSize.bind(this)}>
                <p className="not-active"> Size</p>
                <img src="/arrow.svg" className="Arrow" />
              </div>
              {this.state.showSize ? (
                <div className="filter-box-wrapper">
                  <hr className="filter-dash-line" />
                  <div className="size-filter">
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
                </div>
              ) : (
                <hr className="filter-line" />
              )}
            </div>
            <div className="filter-item">
              <div className="wrap-header">
                <p className="not-active"> Color</p>
                <img src="/arrow.svg" className="Arrow" />
              </div>

              <hr className="filter-line" />
            </div>

            <div className="filter-item">
              <div className="wrap-header">
                <p className="not-active"> Brand</p>
                <img src="/arrow.svg" className="Arrow" />
              </div>
              <hr className="filter-line" />
            </div>

            <div className="filter-item">
              <div className="wrap-header">
                <p className="not-active"> Price</p>
                <img src="/arrow.svg" className="Arrow" />
              </div>
              <hr className="filter-line" />
            </div>

            <div className="filter-item">
              <div className="wrap-header">
                <p className="not-active"> Available</p>
                <img src="/arrow.svg" className="Arrow" />
              </div>
              <hr className="filter-line" />
            </div>
          </div>
          <div className="right-warper">
            <div className="header">
              <div className="sort-by">
                <div className="up" onClick={this.handleShowSort.bind(this)}>
                  <p>Sort by:</p>
                  <p className="bold"> {this.state.sortBy}</p>
                  {this.state.sortShow ? (
                    <img src="/arrow.svg" className="ArrowRotate" />
                  ) : (
                    <img src="/arrow.svg" className="Arrow" />
                  )}
                </div>

                {this.state.sortShow && (
                  <div className="down">
                    <ul>
                      <li>
                        <p> Popularity</p>
                        <div />
                      </li>
                      <li>
                        <p> Name: A - Z</p>
                        <div />
                      </li>
                      <li>
                        <p> Price: lowest to highest</p>
                        <div />
                      </li>
                      <li>
                        <p> Price: highest to lowest</p>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="page-button">
                <img
                  src="/arrow.svg"
                  className="ArrowLeft"
                  onClick={this.handleChangePage.bind(this, -1)}
                />
                <div>{this.state.page}</div>
                <img
                  src="/arrow.svg"
                  className="ArrowRight"
                  onClick={this.handleChangePage.bind(this, 1)}
                />
              </div>
            </div>

            <Gallery
              handleChangePage={this.handleChangePage}
              price={this.state.price}
              size={this.state.size}
              sortBy={this.state.sortBy}
              avail={this.state.avail}
              color={this.state.color}
              page={this.state.page}
              type={this.state.type}
              gender={gender}
              kind={kind}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withTracker(props => {
  const {
    match: {
      params: { gender, kind }
    }
  } = props;

  Meteor.subscribe("components", gender, kind);
  return {
    component: Components.findOne({})
  };
})(ProductList);

// export default ProductList;
