import React, { Component } from "react";
import Card from "../ui/Components/Card";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: [
        {
          name: "Collete Stretch Linen",
          imgURL: "/rectangle-copy-54.jpg",
          price: "60",
          soldOut: false
        },
        {
          name: "New Stretch Linen",
          imgURL: "/rectangle-copy-54.jpg",
          price: "40",
          soldOut: true
          
        },
        {
          name: "Pipa Halter Stretch Linen",
          imgURL: "/rectangle-copy-54.jpg",
          price: "69",
          soldOut: false
        },
        {
          name: "Collete Stretch Linen",
          imgURL: "/rectangle-copy-54.jpg",
          price: "60",
          soldOut: false
        },
        {
          name: "New Stretch Linen",
          imgURL: "/rectangle-copy-54.jpg",
          price: "40",
          soldOut: true
        },
        {
          name: "Collete Stretch Linen",
          imgURL: "/rectangle-copy-54.jpg",
          price: "60",
          soldOut: false
        },
        {
          name: "New Stretch Linen",
          imgURL: "/rectangle-copy-54.jpg",
          price: "40",
          soldOut: true
        }
      ]
    };
  }
  render() {
    return (
      <div className="gallery-wrapper">
        {this.state.cardList.map((item, index) => {
          return (
            <Card
              key={index}
              name={item.name}
              imgURL={item.imgURL}
              price={item.price}
              soldOut={item.soldOut}
            />
          );
        })}
      </div>
    );
  }
}

export default Gallery;
