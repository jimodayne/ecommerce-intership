import React, { Component } from "react";
import moment from "moment";
import { Meteor } from "meteor/meteor";

class OrderSellerItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  toggleDropdown() {
    this.setState({ show: !this.state.show });
  }
  handleMarkOrder(status) {
    Meteor.call("orders.editStatus", status, this.props.order._id);
  }

  render() {
    const {
      total,
      createdAt,
      _id,
      orderStatus
      // orderedItems
    } = this.props.order;
    return (
      <div className="order-item-wraper">
        <div className="id">{_id.slice(-8)}</div>
        <div className="date">
          {moment(createdAt).format("dddd, MMMM Do YYYY")}
        </div>
        <div className="detail">Comming soon</div>
        <div className="total">{total.toFixed(2)}</div>
        <div className="status">
          {orderStatus === "pending" ? (
            <div className="pending-box">Pending</div>
          ) : orderStatus === "completed" ? (
            <div className="complete-box">Completed</div>
          ) : (
            <div className="cancel-box">Canceled</div>
          )}
        </div>
        <div className="action" onClick={this.toggleDropdown.bind(this)}>
          <p>Actions</p>
          <img src="/dropdown.svg" />
          {this.state.show && (
            <div className="drop-down-order-seller">
              <div
                className="item"
                onClick={this.handleMarkOrder.bind(this, "completed")}
              >
                <div className="colorGreen" />
                <div>Mark as Completed</div>
              </div>
              <div
                className="item"
                onClick={this.handleMarkOrder.bind(this, "canceled")}
              >
                <div className="colorRed" />
                <div>Mark as Canceled</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default OrderSellerItem;
