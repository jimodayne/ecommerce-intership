import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      list: this.props.list,
      headerTitle: this.props.title
    };
  }

  static get propTypes() {
    return {
      list: PropTypes.array,
      title: PropTypes.string
    };
  }

  toggleList() {
    this.setState({ listOpen: !this.state.listOpen });
  }

  handleClickOutside = evt => {
    this.setState({
      listOpen: false
    });
  };

  render() {
    return (
      <div className="nav-dropdown">
        <div className="button-wrap" onClick={this.toggleList.bind(this)}>
          <div className="dropbtn">{this.state.headerTitle}</div>
          <img src="/arrow.svg" className="Arrow" />
        </div>
        {this.state.listOpen && (
          <div className="dropdown-content">
            {this.state.list.map((item, key) => (
              <Link to={item.link} key={key}>
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default onClickOutside(Dropdown);
