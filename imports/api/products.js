import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
// import { check } from 'meteor/check';

if (Meteor.isServer) {
  Meteor.publish("countProduct", function productsCountAll(gender, kind) {
    return Products.find({ "type.gender": gender, "type.kind": kind });
  });
  // This code only runs on the server
  Meteor.publish("productsPublic", function productsPublicAll(
    gender,
    kind,
    offset
  ) {
    return Products.find(
      { "type.gender": gender, "type.kind": kind },
      {
        fields: { title: 1, sku: 1, imgURL: 1, soldOut: 1, price: 1 },
        skip: offset * 20,
        limit: 20
      }
    );
  });

  Meteor.publish("moreInformationProduct", function productsAll() {
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
  },

  "products.addNew"(product) {
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    Products.insert(product);
  }
});

export const Products = new Mongo.Collection("products");
