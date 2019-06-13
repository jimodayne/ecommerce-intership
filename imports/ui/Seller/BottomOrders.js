import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

class BottomOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: 1,
      to: 0
    };
    this.array = Array.from({ length: 5 }, (v, k) => k + 1);
  }

  componentDidMount() {
    this.setState({
      from: (this.props.page - 1) * 10 + 1,
      to: this.props.page * 10
    });
  }

  render() {
    return (
      <div className="one-line-wrapper">
        <div className="sell-left-wrapper">{`Show ${this.state.from} to ${
          this.state.to
        } of ${this.props.total} entries`}</div>

        <div className="sell-right-wrapper">
          <div className="box" onClick={() => this.props.handleChoosePage(1)}>
            <img src="/first-page.svg" />
          </div>
          <div
            className="box"
            onClick={() => this.props.handleNextPrevPage(-1)}
          >
            <img src="/prev.svg" />
          </div>
          {this.array.map((item, index) => {
            const value = item + parseInt((this.props.page - 1) / 5) * 5;
            if ((value - 1) * 10 > this.props.total) return;
            else {
              return value !== this.props.page ? (
                <div
                  className="box"
                  key={index}
                  onClick={() => this.props.handleChoosePage(value)}
                >
                  {value}
                </div>
              ) : (
                <div className="box" id="chosen" key={index}>
                  {value}
                </div>
              );
            }
          })}
          <div className="box" onClick={() => this.props.handleNextPrevPage(1)}>
            <img src="/next.svg" />
          </div>
          <div className="box">
            <img src="/last-page.svg" />
          </div>
        </div>
      </div>
    );
  }
}

export default BottomOrders;
