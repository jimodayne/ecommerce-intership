import { Mongo } from "meteor/mongo";
import _ from "lodash";

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("ordersUser", function ordersPublication() {
    return Orders.find({ userId: this.userId });
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

    Orders.insert({
      createdAt: new Date(),
      orderedItems: cart,
      total: total,
      orderStatus: "pending",
      userId: this.userId
    });

    // Orders.insert({ text: "Hello, world!" });

    Meteor.users.update(this.userId, {
      $set: {
        cart: []
      }
    });
  }
});

Meteor.methods({
  "orders.cancel"(orderId) {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    Orders.update(
      {
        _id: orderId,
        userId: this.userId
      },
      {
        $set: {
          orderStatus: "cancel"
        }
      }
    );
  }
});

export const Orders = new Mongo.Collection("orders");
