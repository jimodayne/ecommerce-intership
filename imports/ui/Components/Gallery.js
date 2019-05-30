import React, { Component } from "react";
import Card from "./Card";
import { Products } from "../../api/products"; //
import { withTracker } from "meteor/react-meteor-data";
import _ from "lodash";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {this.props.cardList.length ? (
          <>
            <div className="gallery-wrapper">
              <div className="all-card-wrapper">
                {this.props.cardList.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      sku={item.sku}
                      name={item.title}
                      imgURL={item.imgURL.main}
                      price={item.price.toString()}
                      soldOut={item.soldOut}
                      user_id={this.props.user}
                    />
                  );
                })}
              </div>
              <div className="page-button-target">
                <div className="page-button">
                  <img
                    src="/arrow.svg"
                    className="ArrowLeft"
                    onClick={() => this.props.handleChangePage(-1)}
                  />
                  <div>
                    {this.props.page}
                  </div>
                  <img
                    src="/arrow.svg"
                    className="ArrowRight"
                    onClick={() => this.props.handleChangePage(1)}
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="no-result-found">No result found</div>
        )}
      </>
    );
  }
}

export default withTracker(props => {
  const { gender, kind, page } = props;
  Meteor.subscribe("productsPublic", gender, kind, page - 1);

  return {
    user: Meteor.user(),
    cardList: Products.find({}).fetch()
  };
})(Gallery);
