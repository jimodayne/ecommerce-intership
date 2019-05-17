import React, { Component } from "react";
import _ from "lodash";
import Gallery from "./Gallery";
import PropTypes from "prop-types";

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
      maxPage: 100,
      gender: this.props.gender,
      category: this.props.category,
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
  handleNextPage() {
    if (this.state.page === this.state.maxPage) return;
    this.setState({ page: this.state.page + 1 });
  }
  handlePrevPage() {
    if (this.state.page === 1) return;
    this.setState({ page: this.state.page - 1 });
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

  showSize() {
    this.setState({ showSize: !this.state.showSize });
  }
  render() {
    return (
      <div className="product-lst">
        <div className="product-header">
          {_.capitalize(this.state.gender)}/{_.capitalize(this.state.category)}
        </div>
        <div className="product-wrap">
          <div className="left-warper">
            <div className="category">Category</div>

            <ul>
              <li>All dresses</li>
              <li>Rompers / Jumpsuits</li>
              <li>Casual dresses</li>
              <li>Going out dresses</li>
              <li>Party / Ocassion dresses</li>
              <li>Mini dresses</li>
              <li>Maxi / Midi dresses</li>
              <li>Sets</li>
            </ul>
            <div className="small-line" />
            <div className="category">Filter</div>

            <div className="filter-item">
              <div className="wrap-header">
                <p className="not-active"> Size</p>
                <img
                  src="/arrow.svg"
                  className="Arrow"
                  onClick={this.showSize.bind(this)}
                />
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
              <div className="page">
                <img
                  src="/arrow.svg"
                  className="ArrowLeft"
                  onClick={this.handlePrevPage.bind(this)}
                />
                <div>
                  {this.state.page}/{this.state.maxPage}
                </div>
                <img
                  src="/arrow.svg"
                  className="ArrowRight"
                  onClick={this.handleNextPage.bind(this)}
                />
              </div>
            </div>

            <Gallery
              price={this.state.price}
              size={this.state.size}
              sortBy={this.state.sortBy}
              avail={this.state.avail}
              color={this.state.color}
              page={this.state.page}
              type={this.state.type}
              gender={this.props.gender}
              category={this.props.category}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
