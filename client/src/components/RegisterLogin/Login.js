import React, { Component } from "react";
import API from "../../utils/API";

class Login extends Component {
  // Setting the component's initial state
  state = {
    userName: "",
    password: "",
    welcome: "",
    notFound: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let { name, value } = event.target;
    
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
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
          console.log("not found");
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
        }
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
        <p>Login</p>
        <form className="form">
          <input
            value={this.state.userName}
            name="userName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="User Name"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <p>
          {this.state.notFound}
          {this.state.welcome}
        </p>
      </div>
    );
  }
}

export default Login;
