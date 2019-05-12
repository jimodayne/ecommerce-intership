import React, { Component } from "react";
import _ from "lodash";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "Popularity",
      size: undefined,
      color: undefined,
      brand: undefined,
      price: undefined,
      avail: undefined,
      page: 1,
      gender: this.props.gender,
      category: this.props.category,
      cart: 0,
      list: [
        {
          name: "Collete Stretch Linen",
          imgURL: "",
          price: "",
          soldOut: false
        },
        {
          name: "New Stretch Linen",
          imgURL: "",
          price: "",
          soldOut: true
        },
        {
          name: "Pipa Halter Stretch Linen",
          imgURL: "",
          price: "",
          soldOut: false
        }
      ]
    };
  }
  render() {
    return (
      <div className="product-lst">
        <div className="header">
          {_.capitalize(this.state.gender)}/{_.capitalize(this.state.category)}
        </div>
        <div>
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
                <p> Size</p>
                <img src="/arrow.svg" className="Arrow" />
              </div>
              <div className="filter-line" />
            </div>
            <div className="filter-item">
              <div className="wrap-header">
                <p> Color</p>
                <img src="/arrow.svg" className="Arrow" />
              </div>
              <div className="filter-line" />
            </div>

            <div className="filter-item">
              <div className="wrap-header">
                <p> Brand</p>
                <img src="/arrow.svg" className="Arrow" />
              </div>
              <div className="filter-line" />
            </div>

            <div className="filter-item">
              <div className="wrap-header">
                <p> Price</p>
                <img src="/arrow.svg" className="Arrow" />
              </div>
              <div className="filter-line" />
            </div>

            <div className="filter-item">
              <div className="wrap-header">
                <p> Available</p>
                <img src="/arrow.svg" className="Arrow" />
              </div>
              <div className="filter-line" />
            </div>
          </div>
          <div className="right-warper">
            <div className="header">
              <div className="sort-by">
                <p>Sort by:</p>
                <p className="bold"> {this.state.sortBy}</p>
                <img src="/arrow.svg" className="Arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
