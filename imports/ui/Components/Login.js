/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { Link, Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: undefined
    };
  }
  handleChange(evt) {
    this.setState({ [evt.target.id]: evt.target.value });
  }
  handleLogIn(e) {
    e.preventDefault();
    Meteor.loginWithPassword(this.state.email, this.state.password, err => {
      if (err) {
        this.setState({
          error: err.reason
        });
      } else {
        this.props.toggleLogin();
      }
    });
  }
  hideLogin() {
    this.props.toggleLogin();
  }

  changeToRegister() {
    this.props.toggleLogin();
    this.props.toggleRegister();
  }

  // componentDidMount() {
  //   console.log("Mount:", Meteor.users.find().fetch());
  // }

  render() {
    return (
      <div className="login-wrap">
        <div className="register-pop-up" id="login">
          <div className="register-top-wraper" id="login">
            <div className="register-register">Log In</div>

            <div className="register-form-wraper">
              <div className="register-item">
                <p>Email</p>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email...."
                  value={this.state.email}
                  onChange={this.handleChange.bind(this)}
                  // onKeyPress={this.handleKeyPress.bind(this)}
                />
              </div>
              <div className="register-item" id="password">
                <p>Password</p>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password…"
                  value={this.state.password}
                  onChange={this.handleChange.bind(this)}
                  // onKeyPress={this.handleKeyPress.bind(this)}
                />
              </div>

              <div className="remember-forgot-wrapper">
                <div className="left-wrap">
                  <img src="/check-box.svg" className="CheckBox" />
                  <div> Remember password</div>
                </div>
                <div className="right-wrap">Forgot your password?</div>
              </div>

              {/* <button
                className="inactive"
                onClick={this.handleLogIn.bind(this)}
              >
                Log In
              </button> */}

              <button className="active" onClick={this.handleLogIn.bind(this)}>
                Log In
              </button>
            </div>
          </div>
          <div className="log-in-line" />
          <div className="register-bot-wraper">
            <div>Don't have an account? </div>
            <div
              className="bold-orange"
              onClick={this.changeToRegister.bind(this)}
            >
              Register
            </div>
          </div>
        </div>
        <div className="back-ground-dark" onClick={this.hideLogin.bind(this)} />
      </div>
    );
  }
}

export default Login;
