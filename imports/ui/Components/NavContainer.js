import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import Navbar from "./Navbar";

// export default withTracker() => {
//   return {
//     user: Meteor.user(),
//   };
// }, Navbar);

export default withTracker(() => {
  return {
    user: Meteor.user()
  };
})(Navbar);
