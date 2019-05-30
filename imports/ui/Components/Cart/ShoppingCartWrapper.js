import { Products } from "../../../api/products"; //
import { withTracker } from "meteor/react-meteor-data";
import ShoppingCart from "../../Main/ShoppingCart";

export default withTracker(() => {
  Meteor.subscribe("userData");
  Meteor.subscribe("moreInformationProduct");

  const user = Meteor.user();

  let productIdList = [];
  if (user) {
    if (user.cart) {
      productIdList = user.cart.map(item => item.product_id);
    }
  } else {
    const tempCart = JSON.parse(localStorage.getItem("cart"));
    if (tempCart && tempCart[0]) {
      productIdList = tempCart.map(item => item.product_id);
    }
  }

  return {
    user,
    products: Products.find(
      { _id: { $in: productIdList } },
      { fields: { title: 1, price: 1, imgURL: 1 } }
    ).fetch()
  };
})(ShoppingCart);
