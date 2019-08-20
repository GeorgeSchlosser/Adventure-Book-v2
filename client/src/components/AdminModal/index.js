import React, { Component } from "react";
import Popup from "reactjs-popup";
import "./style.css";

class AdminModal extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <Popup
          open={this.props.open}
          closeOnDocumentClick
          onClose={this.props.closeModal}
        >
        {close => (
          <div className="modal">
            <a className="close" onClick={ () => close() }> &times; </a>
            <div className="header"> { this.props.header } </div>
            <div className="content">{ this.props.children }</div>
            <div className="actions">
              <button className="button" onClick={() => close()}> OK </button>
            </div>
          </div>
        )}
        </Popup>
      </div>
    );
  }
}

// render(<ControlledPopup />);

export default AdminModal;