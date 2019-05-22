/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { withHistory, Link } from "react-router-dom";

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
    this.setState({ [event.target.id]: evt.target.value });
  }
  handleLogIn(e) {
    e.preventDefault();
    Meteor.loginWithPassword(this.state.email, this.state.password, err => {
      if (err) {
        this.setState({
          error: err.reason
        });
      } else {
        this.props.history.push("/");
      }
    });
  }

  // componentDidMount() {
  //   console.log("Mount:", Meteor.users.find().fetch());
  // }

  render() {
    return (
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
            <div className="register-item">
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

            <button className="inactive" onClick={this.handleLogIn.bind(this)}>
              Log In
            </button>
            <div className="remember-forgot-wrapper">
              <div className="left-wrap">
                <img src="/check-box.svg" className="CheckBox" />
                <div> Remember password</div>
              </div>
              <div className="right-wrap">Forgot your password?</div>
            </div>
          </div>
        </div>
        <div className="register-bot-wraper">
          {/* <div>Don’t have an account?</div> */}
          <div>
            Don't have an account? <Link to="/signup">Register</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
