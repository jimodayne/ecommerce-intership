import React, { Component } from "react";
import moment from "moment";
// import _ from "lodash";
import { Button, Modal } from "react-bootstrap";
import { Meteor } from "meteor/meteor";

class OrderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "8Ry9tNBXhqouS78nq",
      date: moment(),
      detail: "Collete Stretch Linen Minidress (M) x 1",
      total: 59.99,
      status: "pending",
      show: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleCancelOrder() {
    this.setState({ show: false });
    // console.log("this.props.order._id", this.props.order._id);
    Meteor.call("orders.cancel", this.props.order._id);
  }

  handleShow() {
    this.setState({ show: true });
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
        <div className="total">{"$" + total.toFixed(2)}</div>
        <div className="status">
          {orderStatus === "pending" ? (
            <div className="pending-box">Pending</div>
          ) : orderStatus === "completed" ? (
            <div className="complete-box">Completed</div>
          ) : (
            <div className="cancel-box">Canceled</div>
          )}
        </div>
        {orderStatus === "pending" && (
          <Button variant="outline-secondary" onClick={this.handleShow}>
            Cancel
          </Button>
        )}

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {`Woohoo, you're going to cancel this order?`}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button
              variant="danger"
              onClick={this.handleCancelOrder.bind(this)}
            >
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default OrderItem;
