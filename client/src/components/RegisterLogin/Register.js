import React, { Component } from "react";
import API from "../../utils/API";
class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    forms: "",
    passwordLength: "",
    passwordMatch: "",
    welcome: "",
    userNameTaken: ""
  };
  handleInputChange = event => {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (
      !this.state.firstName ||
      !this.state.lastName ||
      !this.state.userName ||
      !this.state.password
    ) {
      this.setState({
        forms: "Please fill out all of the forms "
      });
    } else if (this.state.password < 6) {
      this.setState({
        passwordLength: "Your password must be at least 6 characters"
      });
    } else if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        passwordMatch: "Your passwords didn't match",
        password: "",
        confirmPassword: ""
      });
    } else {
      API.saveUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        userName: this.state.userName,
        password: this.state.password
      })
        .then(resp => {
          if (resp.data !== null) {
            this.setState({
              welcome: "Thanks for registering! You're all set to login"
            });
            setTimeout(() => this.props.history.push("/login"), 2000);
          } else {
            this.setState({
              userNameTaken: "Sorry, that user name is taken"
            });
          }
        })
        .catch(err => console.log(err));
      setTimeout(
        () =>
          this.setState({
            forms: "",
            passwordLength: "",
            welcome: "",
            userNameTaken: "",
            passwordMatch: ""
          }),
        3000
      );
      this.setState({
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        confirmPassword: ""
      });
    }
    setTimeout(
      () =>
        this.setState({
          forms: "",
          passwordLength: "",
          welcome: "",
          userNameTaken: "",
          passwordMatch: ""
        }),
      3000
    );
  };
  render() {
    return (
      <div className="bg">
        <p className="admin-font">Register</p>
        <form className="pure-form pure-form-stacked centered-form">
          <input
            className="form-input-centered"
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            className="form-input-centered"
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            className="form-input-centered"
            value={this.state.userName}
            name="userName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="User Name"
          />
          <input
            className="form-input-centered"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <input
            className="form-input-centered"
            value={this.state.confirmPassword}
            name="confirmPassword"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Confirm Password"
          />
          <button className= "pure-button" id="hateThisButton" onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <p>
          {this.state.forms}
          {this.state.passwordLength}
          {this.state.passwordMatch}
          {this.state.welcome}
          {this.state.userNameTaken}
        </p>
      </div>
    );
  }
}
export default Register;