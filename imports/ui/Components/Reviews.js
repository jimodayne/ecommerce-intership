import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import { withTracker } from "meteor/react-meteor-data";
import Review from "./Review";
// import { Products } from "../../api/products";
import moment from "moment";
import _ from "lodash";
import { Products } from "../../api/products";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      rating: 0,
      haveError: true,
      errorLog: [],
      userReview: {},
      otherReviews: [],
      showForm: false
    };
  }

  async componentDidMount() {
    const userReview = _.find(this.props.product.reviews, element => {
      return element._id === this.props.user._id;
    });
    const otherReviews = _.filter(this.props.product.reviews, element => {
      return element._id !== this.props.user._id;
    });
    const showForm = userReview ? false : true;
    this.setState({
      userReview: userReview,
      otherReviews: otherReviews,
      showForm: showForm
    });
  }

  handleSubmitReview(e) {
    e.preventDefault();
    const newReview = {
      title: this.state.title,
      content: this.state.content,
      lastModified: Date(),
      rating: this.state.rating,
      name: this.props.user.profile.name
    };

    Meteor.call("products.addReview", this.props.id, newReview);
    this.setState({ userReview: newReview });
  }

  handleEditReview(e) {
    e.preventDefault();
    const newReview = {
      title: this.state.title,
      content: this.state.content,
      lastModified: Date(),
      rating: this.state.rating,
      name: this.props.user.profile.name
    };

    Meteor.call("products.editReview", this.props.id, newReview);
    this.setState({ userReview: newReview, showForm: false });
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
  handleClickEdit() {
    this.setState({ showForm: !this.state.showForm });
  }

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
              {this.state.userReview ? (
                <>
                  <div className="review-item-wrap">
                    <div className="user-info">
                      <div className="name"> You </div>
                      <div className="user-edit-wrap">
                        <p onClick={this.handleClickEdit.bind(this)}> Edit</p>
                        <div className="horizontal-line" />
                        <p> Delete </p>
                      </div>
                    </div>

                    {this.state.showForm ? (
                      <>
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
                                <button
                                  id="active"
                                  onClick={this.handleEditReview.bind(this)}
                                >
                                  Submit
                                </button>
                              ) : (
                                <button id="inactive"> Submit</button>
                              )}
                            </div>
                          </div>
                        </form>
                      </>
                    ) : (
                      <div className="user-review">
                        <div className="rev-title">
                          {this.state.userReview.title}
                        </div>
                        <StarRatingComponent
                          name="star-rate"
                          editing={false}
                          // renderStarIcon={() => <img src="/star.svg" />}
                          value={this.state.userReview.rating}
                          emptyStarColor="#D4D3D3"
                          starColor="#FFD543"
                        />

                        <div className="rev-content">
                          {this.state.userReview.content}
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="review-form">
                  <div className="name"> You </div>
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
                          <button
                            id="active"
                            onClick={this.handleSubmitReview.bind(this)}
                          >
                            Submit
                          </button>
                        ) : (
                          <button id="inactive"> Submit</button>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              )}

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

          {this.props.user ? (
            this.state.otherReviews.map((item, index) => {
              return (
                <Review
                  key={index}
                  name={item.name}
                  rating={item.rating}
                  lastModified={item.lastModified}
                  content={item.content}
                  title={item.title}
                />
              );
            })
          ) : this.props.product.reviews ? (
            this.props.product.reviews.map((item, index) => {
              return (
                <Review
                  key={index}
                  name={item.name}
                  rating={item.rating}
                  lastModified={item.lastModified}
                  content={item.content}
                  title={item.title}
                />
              );
            })
          ) : (
            <div className="no-review"> No reviews</div>
          )}
        </div>
      </>
    );
  }
}

export default withTracker(props => {
  Meteor.subscribe("products");
  //   console.log(props.id);
  return {
    product: Products.findOne({ _id: props.id }, { fields: { reviews: 1 } }),
    user: Meteor.user()
  };
})(Reviews);
