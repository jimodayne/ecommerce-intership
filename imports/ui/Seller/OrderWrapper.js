import { Orders } from "../../api/orders"; //
import { withTracker } from "meteor/react-meteor-data";
import OrderList from "./OrderList";

export default withTracker(props => {
  Meteor.subscribe("ordersAdmin", props.page - 1);

  return {
    orders: Orders.find({}).fetch()
  };
})(OrderList);
