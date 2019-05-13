import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      list: this.props.list,
      headerTitle: this.props.title
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
          <ul className="dropdown-content" id="menDropdown">
            {this.state.list.map((item, key) => (
              <li key={key}>{item.title}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default onClickOutside(Dropdown);
