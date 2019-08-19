import React, { Component } from "react";
import API from "../../utils/API";
import "../RegisterLogin/style.css";

class Register extends Component {
  // Setting the component's initial state
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
    // Getting the value and name of the input which triggered the change
    let { name, value } = event.target;
    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (
      !this.state.firstName ||
      !this.state.lastName ||
      !this.state.userName ||
      !this.state.password
    ) {
      this.setState({
        forms: "Please fill out all of the forms. "
      });
    }

    else if (this.state.password < 6) {
      this.setState({
        passwordLength: "Your password must be at least 6 characters."
      });
    }

    else if (this.state.password !== this.state.confirmPassword) {
      this.setState({
		passwordMatch: "Your passwords didn't match",
		firstName: "",
        lastName: "",
        userName: "",
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
            console.log("Hi ");
            this.setState({
              welcome: " You're all set to login."
            });
          } else {
            this.setState({
              userNameTaken: "Sorry, that user name is taken"
            });
          }
        })

        .catch(err => console.log(err));

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
      5000
    );
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
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
            type="confirmPassword"
            placeholder="Confirm Password"
          />
          <button className="pure-button pure-button-primary" onClick={this.handleFormSubmit}>Submit</button>
        </form>
        
  		 
        <div className="bg"></div> 
        

        <p>
          {this.state.forms}
          {this.state.passwordLength}
          {this.state.passwordMatch}
          {this.state.welcome}
          {this.state.userNameTaken}
        </p>
        </div>
        )};
}

export default Register;
