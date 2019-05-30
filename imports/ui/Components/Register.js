import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";
// import { withHistory, Link } from "react-router-dom";
// import validator from "validator";

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
      errorPass: "",
      errorEmail: "",
      errorName: ""
    };
  }
  handleChange(evt) {
    this.setState({ [event.target.id]: evt.target.value });
  }
  handleSignUp(e) {
    e.preventDefault();
    // if (!this.validateName()) return;
    if (!this.validateEmail()) return;
    if (!this.validatePassword()) return;

    const newUser = {
      email: this.state.email,
      password: this.state.password,
      profile: {
        name: this.state.name
      }
    };
    // Accounts.createUser(newUser, err => {
    //   if (err) {
    //     this.setState({
    //       error: err.reason
    //     });
    //   } else {
    //     this.props.toggleRegister();
    //   }
    // });
    console.log("user -created!");
  }

  hideLogin() {
    this.props.toggleRegister();
  }

  changeToLogin() {
    this.props.toggleLogin();
    this.props.toggleRegister();
  }

  validatePassword() {
    if (this.state.password.length <= 6) {
      this.setState({
        errorPass: "Your passwords must be more than 6 characters."
      });
      return false;
    } else {
      this.setState({
        errorPass: ""
      });
      return true;
    }
  }

  validateEmail() {
    if (this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      this.setState({
        errorEmail: ""
      });
      return true;
    } else {
      this.setState({
        errorEmail: "Please enter a valid e-mail!"
      });
      return false;
    }
  }

  // componentDidMount() {
  //   console.log("Mount:", Meteor.users.find().fetch());
  // }

  render() {
    return (
      <div className="login-wrap">
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
                <p className="err">{this.state.errorName}</p>
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
                <p className="err">{this.state.errorEmail}</p>
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
                <p className="err">{this.state.errorPass}</p>
              </div>
              <p className="policy">
                By creating an account you agree to the
                <span className="policy-bold-underline">Terms of Service</span>
                and
                <span className="policy-bold-underline"> Privacy Policy</span>
              </p>

              {/* <button
                className="inactive"
                onClick={this.handleSignUp.bind(this)}
              >
                Register
              </button> */}

              <button className="active" onClick={this.handleSignUp.bind(this)}>
                Register
              </button>
            </div>
          </div>

          <div className="log-in-line" />
          <div className="register-bot-wraper">
            <div>Do you have an account? </div>
            <div
              className="bold-orange"
              onClick={this.changeToLogin.bind(this)}
            >
              Log In
            </div>
          </div>
        </div>
        <div className="back-ground-dark" onClick={this.hideLogin.bind(this)} />
      </div>
    );
  }
}

export default Register;
