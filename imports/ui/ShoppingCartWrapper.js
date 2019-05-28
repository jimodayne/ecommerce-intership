import { Products } from "../api/products";
import { withTracker } from "meteor/react-meteor-data";
import ShoppingCart from "./ShoppingCart";

export default withTracker(() => {
  Meteor.subscribe("userData");
  Meteor.subscribe("products");

  const user = Meteor.user();

  let productIdList = [];
  if (user && user.cart) {
    productIdList = user.cart.map(item => item.product_id);
  }

  return {
    user,
    products: Products.find(
      { _id: { $in: productIdList } },
      { fields: { title: 1, price: 1, imgURL: 1 } }
    ).fetch()
  };
})(ShoppingCart);
