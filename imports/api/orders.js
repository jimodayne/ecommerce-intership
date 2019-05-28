import { Mongo } from "meteor/mongo";
import _ from "lodash";

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("orders", function ordersPublication() {
    return Orders.find();
  });
}

Meteor.methods({
  "orders.addNew"(cart, products) {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    const total = cart.reduce((lst, item) => {
      delete item._id;
      return (
        lst +
        _.find(products, o => {
          return o._id.toString() === item.product_id.toString();
        }).price *
          item.quantity
      );
    }, 0);

    Orders.insert(
      {
        createdAt: new Date(),
        orderedItems: cart,
        total: total,
        orderStatus: "pending",
        userId: this.userId
      },
      (err, res) => {
        if (err) {
          console.error(err);
        } else {
          console.log(res);
        }
      }
    );

    // Orders.insert({ text: "Hello, world!" });

    Meteor.users.update(this.userId, {
      $set: {
        cart: []
      }
    });
  }
});

export const Orders = new Mongo.Collection("orders");
