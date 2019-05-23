import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import Review from "./Review";

class Reviews extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="review-header-wrapper">
          <div className="line1" />
          <div className="text">Reviews</div>
          <div className="line2" />
        </div>
        <div className="review-grid">
          <Review />
        </div>
      </>
    );
  }
}

export default withTracker(() => {
  return {
    user: Meteor.user()
  };
})(Reviews);
