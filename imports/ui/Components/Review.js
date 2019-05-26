import React, { Component } from "react";
import moment from "moment";
import StarRatingComponent from "react-star-rating-component";

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="review-item-wrap">
          <div className="user-info">
            <div className="name"> {this.props.name} </div>
            <div className="date">
              {moment(this.props.lastModified).format("DD MMM")}{" "}
            </div>
          </div>

          <div className="user-review">
            <div className="rev-title">{this.props.title}</div>
            <StarRatingComponent
              name="star-rate"
              editing={false}
              // renderStarIcon={() => <img src="/star.svg" />}
              value={this.props.rating}
              emptyStarColor="#D4D3D3"
              starColor="#FFD543"
            />
            {/* <div className="rev-star">{this.state.tile}</div> */}
            <div className="rev-content">{this.props.content}</div>
          </div>
        </div>
        {this.props.name !== "You" && <div className="dot-line" />}
      </>
    );
  }
}

export default Review;
