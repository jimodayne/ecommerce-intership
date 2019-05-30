import React, { Component } from "react";
// import background from "./background.png";
// import logo from "./logo.svg";

class LoginSeller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: undefined
    };
  }

  componentDidMount() {
    // Meteor.logout(err => {
    //   if (err) {
    //     this.setState({ error: err.reason });
    //   } else {
    //     // this.props.history.push("/");
    //   }
    // });
  }

  handleLogin(e) {
    // e.preventDefault();
    Meteor.loginWithPassword(this.state.email, this.state.password, err => {
      if (err) {
        this.setState({
          error: err.reason
        });
      } else {
        this.props.history.push("/seller");
      }
    });
  }

  handleChange(evt) {
    this.setState({ [evt.target.id]: evt.target.value });
  }

  render() {
    return (
      <div className="background-wrapper">
        <img src="/background.jpg" alt="background" id="background" />
        <div className="logo">
          <img src="/logo.svg" />
        </div>

        <div className="login-wrapper">
          <div className="login">
            <div className="login-title">Log in</div>
            <div className="log-item">
              <div className="title">Email</div>
              <input
                type="email"
                id="email"
                placeholder="Enter your email...."
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
                // onKeyPress={this.handleKeyPress.bind(this)}
              />
            </div>

            <div className="log-item">
              <div className="title">Password</div>
              <input
                type="password"
                id="password"
                placeholder="Enter your password…"
                value={this.state.password}
                onChange={this.handleChange.bind(this)}
                // onKeyPress={this.handleKeyPress.bind(this)}
              />
            </div>

            <button id="log-in" onClick={this.handleLogin.bind(this)}>
              Log in
            </button>

            <div className="forgot-password">Forgot password</div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginSeller;
