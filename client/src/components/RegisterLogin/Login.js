import React, { Component } from "react";
import API from "../../utils/API";
class Login extends Component {
  state = {
    userName: "",
    password: "",
    welcome: "",
    notFound: ""
  };
  handleInputChange = event => {
    let { name, value } = event.target;
    
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
   
    event.preventDefault();
    if (!this.state.userName || !this.state.password) {
      this.setState({
        notFound:
        "Sorry, that information does not match our records. Please try again."
      });
      setTimeout(
        () =>
          this.setState({
            notFound: "",
          }),
        2000)
        return
      } 
    API.getUser(`${this.state.userName}/${this.state.password}`)
      .then(resp => {
       
        if (resp.data === null) {
          this.setState({
            notFound:
              "Invalid user name or password. Please try again."
          });
        } 
        else {
          this.setState({
            welcome: "Welcome, we hope you enjoy the story"
          });
          setTimeout(
            () => (
              this.setState({
                welcome: "",
                notFound: ""
              }),
            this.props.history.push('/story')),
            2000
          );
        };
      })
      .catch(err => console.log(err));
    this.setState({
      userName: "",
      password: "",
      notFound: ""
    });
    setTimeout(
      () =>
        this.setState({
          welcome: "",
          notFound: ""
        }),
      2000
    );
  };
  render() {
    return (
      <div>
        <p className="admin-font">Login</p>
        <form className="pure-form pure-form-stacked centered-form">
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
          <button className="pure-button pure-button-primary" onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <p>
          {this.state.notFound}
          {this.state.welcome}
        </p>
      </div>
    );
  };
};
export default Login;
