import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";
// Accounts.config({
//   forbidClientAccountCreation: true,
//   loginExpirationDays: 30,
//   oauthSecretKey: "wgporjigrpqgdfg"
// });

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      error: ""
    };
  }
  handleChange(evt) {
    this.setState({ [event.target.id]: evt.target.value });
  }
  handleSignUp(e) {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password,
      profile: {
        name: this.state.name
      }
    };
    Accounts.createUser(newUser, err => {
      if (err) {
        this.setState({ error: err.reason });
      }
    });

    console.log("clicked!");
  }

  // componentDidMount() {
  //   console.log("Mount:", Meteor.users.find().fetch());
  // }

  render() {
    return (
      <div className="register-pop-up">
        <div className="register-top-wraper">
          <div className="register-register">Register</div>

          <div className="register-form-wraper">
            <div className="register-item">
              <p>Name</p>
              <input
                type="text"
                id="name"
                placeholder="Enter your name..."
                value={this.state.name}
                onChange={this.handleChange.bind(this)}
                // onKeyPress={this.handleKeyPress.bind(this)}
              />
            </div>
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
            <p className="policy">
              By creating an account you agree to the Terms of Service and
              Privacy Policy
            </p>
            <button className="inactive" onClick={this.handleSignUp.bind(this)}>
              Register
            </button>
          </div>
        </div>
        <div className="register-bot-wraper">
          <div>Do you have an account?</div>
        </div>
      </div>
    );
  }
}

export default Register;
