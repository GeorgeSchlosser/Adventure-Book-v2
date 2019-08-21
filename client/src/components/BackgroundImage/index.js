import React, { Component } from "react";
import Background from "../../images/background.jpg"

var sectionStyle = {
  width: "100%",
  height: "100%",
  zIndex: -100,
  backgroundImage: "url(" + Background + ")"
};

class BackgroundImage extends Component {
  render() {
    return (
      <section style={ sectionStyle }>
      </section>
    );
  }
}

export default BackgroundImage;