import React, { Component } from 'react';
import API from "../../utils/API";
import AdminModal from "../AdminModal";
import "./style.css";

class AdminSeedButton extends Component {
  state = {
      result: "",
      done: false
  }

  constructor(props) {
    super(props);
    this.callSeed = this.callSeed.bind(this);
    
  }

  callSeed() {
    
    API.seedDb()
      .then(res => {
        this.setState({ done: false });
        console.log(res.data);
        this.setState({ done: true, result: res.data });
      })
      .catch(err => {
        this.setState({ done: false });
        console.log(err);
        this.setState({ done: true, result: "Failed to seed database. See console logging." });
      });
  }

  render() {
  return (
    <div>
      <button
        id="admin-seed" 
        className="pure-button button-warning"
        onClick={ this.callSeed }>
          Re-Seed Default Game Database
      </button>
      <AdminModal
        header="Game Master Console"
        open={ this.state.done } >
          { this.state.result }
      </AdminModal>
    </div>
  )};
};

export default AdminSeedButton;