import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import Navbar from "./Navbar";

export default withTracker(() => {
  Meteor.subscribe("userData");
  return {
    user: Meteor.user()
  };
})(Navbar);
