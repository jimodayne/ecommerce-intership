import React, { Component } from "react";
import Dropdown from "./Dropdown";

// import { withTracker } from "meteor/react-meteor-data";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: 1,
      error: "",
      show: false,
      content: "",
      menObj: [
        {
          link: "#",
          title: "Tops"
        },
        {
          link: "#",
          title: "Bottoms"
        },
        {
          link: "#",
          title: "Shorts"
        },
        {
          link: "#",
          title: "Jackets"
        },
        {
          link: "#",
          title: "Shoes"
        },
        {
          link: "#",
          title: "Sale"
        }
      ],
      ladiesObj: [
        {
          link: "#",
          title: "Tops"
        },
        {
          link: "#",
          title: "Bottoms"
        },
        {
          link: "/ladies/dresses",
          title: "Dresses"
        },
        {
          link: "#",
          title: "Jackets"
        },
        {
          link: "#",
          title: "Shoes"
        },
        {
          link: "#",
          title: "Accessories"
        },
        {
          link: "#",
          title: "Sale"
        }
      ]
    };
  }

  // componentDidMount() {
  //   this.setState({ profile: Meteor.user() });
  //   console.log(this.props.user.profile);
  // }

  logout(e) {
    e.preventDefault();
    Meteor.logout(err => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.props.history.push("/");
      }
    });
    this.setState({ show: false });
  }
  toggleList() {
    this.setState({ show: !this.state.show });
  }

  handleChange(event) {
    this.setState({ content: event.target.value });
  }

  handleKeyPress(event) {
    if (event.key !== "Enter") return;
    if (this.state.content === "") return;
    // this.handleSend();
    // console.log(this.state.content);
    this.setState({ content: "" });
  }

  render() {
    return (
      <div className="nav-bar-primary">
        <div className="nav-top">
          <div className="nav-search">
            <input
              type="text"
              placeholder="Search"
              value={this.state.content}
              onChange={this.handleChange.bind(this)}
              onKeyPress={this.handleKeyPress.bind(this)}
            />

            <img src="/search.svg" className="Search" />
          </div>
          <Link to="/">
            <div className="nav-logo">
              <img src="/logo.svg" className="Logo" />
            </div>
          </Link>
          <div className="nav-right">
            {this.props.user ? (
              <div className="nav-user">
                <img
                  src={this.props.user.profile.imgURL}
                  className="avatar"
                  alt="avatar"
                  onClick={this.toggleList.bind(this)}
                />
                {this.state.show && (
                  <div className="dropdown-user">
                    {/* <Link>Account setting</Link> */}
                    <div className="drop-nav-line" />
                    <Link to="/" onClick={this.logout.bind(this)}>
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="nav-guest">
                <button type="button" className="pri-button">
                  Register
                </button>
                <button type="button" className="sec-button">
                  {/* <Link to "/login" >   Log in</Link>
                   */}
                  <Link to="/login">Log in</Link>
                </button>
              </div>
            )}

            <div className="nav-cart">
              <div className="cart-cir">
                <div className="cart-num">{this.state.cart} </div>
              </div>
              <img src="/cart.svg" className="Cart" />
            </div>
          </div>
        </div>
        <div className="nav-line" />

        <div className="nav-bottom">
          <Dropdown title="Men" list={this.state.menObj} />
          <Dropdown title="Ladies" list={this.state.ladiesObj} />
          <Dropdown title="Girls" list={this.state.ladiesObj} />
          <Dropdown title="Boys" list={this.state.menObj} />
        </div>
        <div className="nav-line" />
      </div>
    );
  }
}

export default Navbar;

// export default withTracker(props => {
//   const isAuthenticated = Meteor.loggingIn();
//   const profile = Meteor.user() ? Meteor.user.profile : {};
//   return {
//     isAuthenticated,
//     profile
//   };
// })(Navbar);
