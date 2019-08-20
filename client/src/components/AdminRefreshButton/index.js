import React, { Component } from 'react';
import "./style.css";

class AdminRefreshButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
  return (
    <button
      id="admin-refresh"
      type="submit"
      className="pure-button pure-button-success">
        Refresh Console
    </button>
  )};
};

export default AdminRefreshButton;