import { Meteor } from "meteor/meteor";

if (Meteor.isServer) {
  Meteor.publish("userData", function() {
    return Meteor.users.find(
      { _id: this.userId },
      { fields: { profile: 1, cart: 1, emails: 1 } }
    );
  });
}

Meteor.methods({
  "user.addCart"(cartItem) {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    cartItem._id = new Mongo.ObjectID();
    Meteor.users.update(this.userId, {
      $push: {
        cart: cartItem
      }
    });
  },
  "user.removeCartItem"(itemId) {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    Meteor.users.update(this.userId, {
      $pull: {
        cart: { _id: itemId }
      }
    });
  },

  "user.editCart"(itemId, amount) {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    Meteor.users.update(
      { _id: this.userId, "cart._id": itemId },
      { $set: { "cart.$.quantity": amount } }
    );
  }

  // "user.editCart"(productId, reviewObj) {
  //   if (!this.userId) {
  //     throw new Meteor.Error("not-authorized");
  //   }

  // }
});

Meteor.users.deny({
  update() {
    return true;
  }
});
