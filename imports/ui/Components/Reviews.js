import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
// import { withTracker } from "meteor/react-meteor-data";
import Review from "./Review";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      rating: 0,
      haveError: true,
      errorLog: []
    };
  }

  handleChange(evt) {
    this.setState({ [event.target.id]: evt.target.value });
    if ((this.state.content || this.state.title) && this.state.rating) {
      this.setState({ haveError: false });
    } else {
      this.setState({ haveError: true });
    }
  }
  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue, haveError: false });
  }
  //   handleChangePage(amount) {
  //     if (amount === -1 && this.state.page === 1) return;
  //     if (amount === 1 && this.state.page === this.state.maxPage) return;
  //     const newpage = this.state.page + amount;
  //     this.setState({ page: newpage });
  //   }

  render() {
    return (
      <>
        <div className="review-header-wrapper">
          <div className="line1" />
          <div className="text">Reviews</div>
          <div className="line2" />
        </div>
        <div className="review-body">
          {this.props.user ? (
            <>
              <div className="review-form">
                <div className="name">You</div>
                <div className="form-input">
                  <form>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={this.state.title}
                      placeholder="TITLE"
                      onChange={this.handleChange.bind(this)}
                    />

                    <textarea
                      placeholder="Add your comment here…"
                      onChange={this.handleChange.bind(this)}
                      value={this.state.content}
                      id="content"
                    />
                    <div className="bottom-wrap">
                      <div className="left">
                        <div className="text">*Rating for us:</div>
                        <StarRatingComponent
                          name="star-rate"
                          // renderStarIcon={() => <img src="/star.svg" />}
                          value={this.state.rating}
                          onStarClick={this.onStarClick.bind(this)}
                          emptyStarColor="#D4D3D3"
                          starColor="#FFD543"
                        />
                      </div>
                      <div className="right">
                        {!this.state.haveError ? (
                          <button id="active">Submit</button>
                        ) : (
                          <button id="inactive"> Submit</button>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="rev-line-long" />
            </>
          ) : (
            <div className="page-button">
              <img
                src="/arrow.svg"
                className="ArrowRight"
                onClick={() => this.props.handleChangePage(1)}
              />
              <div>
                {this.props.page}/{this.props.maxPage}
              </div>
              <img
                src="/arrow.svg"
                className="ArrowLeft"
                onClick={() => this.props.handleChangePage(-1)}
              />
            </div>
          )}

          <Review />
        </div>
      </>
    );
  }
}
export default Reviews;
// export default withTracker(() => {
//   return {
//     user: Meteor.user()
//   };
// })(Reviews);
