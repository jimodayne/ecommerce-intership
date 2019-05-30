import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
// import { withTracker } from "meteor/react-meteor-data";
import { Link, Redirect } from "react-router-dom";

class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  toggleList() {
    this.setState({ show: !this.state.show });
  }

  handleClickOutside = evt => {
    this.setState({
      show: false
    });
  };

  logout(e) {
    e.preventDefault();
    Meteor.logout(err => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        <Redirect
          to={{
            pathname: "/",
            state: { from: this.props.location }
          }}
        />;
      }
    });
    localStorage.clear();
    this.setState({ show: false });
    window.location.reload();
  }

  render() {
    return (
      <div className="nav-user">
        <img
          src={this.props.avatar}
          className="avatar"
          alt="avatar"
          onClick={this.toggleList.bind(this)}
        />
        {this.state.show && (
          <div className="dropdown-user">
            <Link to="/myorder">My order</Link>
            <div className="drop-nav-line" />
            <Link to="/" onClick={this.logout.bind(this)}>
              Logout
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default onClickOutside(UserComponent);
