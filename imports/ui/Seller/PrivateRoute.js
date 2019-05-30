import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Route, Redirect } from "react-router-dom";
import SellerHome from "./SellerHome";

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSeller: false
    };
  }
  render() {
    // console.log("Meteor.userId: ", this.props.user, this.props.user.role);
    return (
      <Route
        render={props =>
          this.props.user && this.props.user.profile.role === "admin" ? (
            <SellerHome />
          ) : (
            <Redirect
              to={{
                pathname: "/loginSeller",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("userData");
  const user = Meteor.user();

  return {
    user
  };
})(PrivateRoute);
