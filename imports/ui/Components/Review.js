import React, { Component } from "react";
import moment from "moment";
import StarRatingComponent from "react-star-rating-component";

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Julia Ryan",
      date: moment(),
      title: "Super cute in black",
      star: 5,
      content: `I love the vintage pattern of the black dress. 
      I got a size 6 and it fits well without being too tight. 
      I can't tell if it's "tru to size" because everything fits a bit differently 
      from store to store and brand to brand. I'm 5'4" with a 34D chest and it hit about mid thigh, 
      which I like. I also like the material and structured shape of the dress 
      because it's easy to dress up or down.`
    };
  }
  render() {
    return (
      <>
        <div className="review-item-wrap">
          <div className="user-info">
            <div className="name"> {this.state.name} </div>
            <div className="date"> {this.state.date.format("DD MMM")} </div>
          </div>

          <div className="user-review">
            <div className="rev-title">{this.state.title}</div>
            <StarRatingComponent
              name="star-rate"
              editing={false}
              // renderStarIcon={() => <img src="/star.svg" />}
              value={this.state.star}
              emptyStarColor="#D4D3D3"
              starColor="#FFD543"
            />
            {/* <div className="rev-star">{this.state.tile}</div> */}
            <div className="rev-content">{this.state.content}</div>
          </div>
        </div>
        <div className="dot-line" />
      </>
    );
  }
}

export default Review;
