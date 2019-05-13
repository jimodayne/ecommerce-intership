import React, { Component } from "react";
import Card from "../ui/Components/Card";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          name: "Collete Stretch Linen",
          imgURL: "",
          price: "",
          soldOut: false
        },
        {
          name: "New Stretch Linen",
          imgURL: "",
          price: "",
          soldOut: true
        },
        {
          name: "Pipa Halter Stretch Linen",
          imgURL: "",
          price: "",
          soldOut: false
        }
      ]
    };
  }
  render() {
    return (
      <div className="gallery-wrapper">
        <Card
          name="Pipa Halter Stretch Linenen"
          imgURL="/rectangle-copy-54.jpg"
          price={"69.00"}
          soldOut={false}
        />
        <Card
          name="Pipa Halter Stretch Linenen"
          imgURL="/rectangle-copy-54.jpg"
          price={"69.00"}
          soldOut={false}
        />
        <Card
          name="Pipa Halter Stretch Linenen"
          imgURL="/rectangle-copy-54.jpg"
          price={"69.00"}
          soldOut={false}
        />
        <Card
          name="Pipa Halter Stretch Linenen"
          imgURL="/rectangle-copy-54.jpg"
          price={"69.00"}
          soldOut={false}
        />
        <Card
          name="Pipa Halter Stretch Linenen"
          imgURL="/rectangle-copy-54.jpg"
          price={"69.00"}
          soldOut={false}
        />

        <Card
          name="Pipa Halter Stretch Linenen"
          imgURL="/rectangle-copy-54.jpg"
          price={"69.00"}
          soldOut={false}
        />
        <Card
          name="Pipa Halter Stretch Linenen"
          imgURL="/rectangle-copy-54.jpg"
          price={"69.00"}
          soldOut={false}
        />
        <Card
          name="Pipa Halter Stretch Linenen"
          imgURL="/rectangle-copy-54.jpg"
          price={"69.00"}
          soldOut={false}
        />
        <Card
          name="Pipa Halter Stretch Linenen"
          imgURL="/rectangle-copy-54.jpg"
          price={"69.00"}
          soldOut={false}
        />
        <Card
          name="Pipa Halter Stretch Linenen"
          imgURL="/rectangle-copy-54.jpg"
          price={"69.00"}
          soldOut={false}
        />
      </div>
    );
  }
}

export default Gallery;
