import React, { Component } from "react";
import BottomOrders from "./BottomOrders";
import OrderWrapper from "./OrderWrapper";
import { Orders } from "../../api/orders";
import { withTracker } from "meteor/react-meteor-data";

class SellerOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
    this.handleNextPrevPage = this.handleNextPrevPage.bind(this);
    this.handleChoosePage = this.handleChoosePage.bind(this);
  }

  handleNextPrevPage(amount) {
    if (amount === -1 && this.state.page === 1) return;
    if (amount === 1 && this.state.page * 10 > this.props.total) return;

    const newPage = this.state.page + amount;
    this.setState({ page: newPage });
  }

  handleChoosePage(page) {
    // console.log("mypage", page);
    this.setState({ page: page });
  }

  render() {
    return (
      <div className="seller-container">
        <div className="heading"> Orders </div>

        <div className="seller-orders-list">
          <div className="seller-order-header">
            <p> Order ID</p>
            <p className="start"> Order Date</p>
            <p className="start"> Detail</p>
            <p> Total ($)</p>
            <p> Status</p>
          </div>
          <div className="end-line" />
          <div className="sell-list-items-wrapper">
            <OrderWrapper page={this.state.page} />
          </div>

          <BottomOrders
            page={this.state.page}
            handleNextPrevPage={this.handleNextPrevPage}
            total={this.props.total}
            handleChoosePage={this.handleChoosePage}
          />
        </div>
      </div>
    );
  }
}

export default withTracker(props => {
  Meteor.subscribe("ordersAdmin");
  return {
    total: Orders.find({}).count()
  };
})(SellerOrders);

// export default SellerOrders;
