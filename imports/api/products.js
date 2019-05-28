import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
// import { check } from 'meteor/check';

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("products", function productsPublication() {
    return Products.find();
  });
}

Meteor.methods({
  "products.addReview"(productId, reviewObj) {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    const tempReview = reviewObj;
    tempReview._id = this.userId;
    Products.update({ _id: productId }, { $addToSet: { reviews: tempReview } });
  },

  "products.editReview"(productId, reviewObj) {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    const tempReview = reviewObj;
    tempReview._id = this.userId;
    Products.update(
      { _id: productId, "reviews._id": this.userId },
      { $set: { "reviews.$": tempReview } }
    );
  }
});

export const Products = new Mongo.Collection("products");
