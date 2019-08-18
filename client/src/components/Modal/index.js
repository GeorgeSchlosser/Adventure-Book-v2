import React, { Component } from "react";
import Popup from "reactjs-popup";
import "./style.css";

class Modal extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Popup trigger={<button className="button"> Open Modal </button>} modal>
        {close => (
          <div className="modal">
            <a className="close" onClick={close}>
              &times;
            </a>
            <div className="header"> { this.props.header } </div>
            <div className="content">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
              Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
              delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
              commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
              explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
            </div>
            <div className="actions">
              <button
                className="button"
                onClick={() => {
                  console.log("modal closed ");
                  close();
                }}
              >
                close modal
              </button>
            </div>
          </div>
        )}
      </Popup>
    )};
};

export default Modal;