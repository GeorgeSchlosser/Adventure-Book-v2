import React, { Component } from 'react';
import API from "../../utils/API";
import storyGraph from "./storyGraph";
import "./style.css";
class AdminStoryGraph extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      layout: "breadthfirst",
      zoom: false
    }

    this.onClickHandler = this.onClickHandler.bind(this);
}

  onClickHandler = (layoutName) => {
    this.setState({ 
      layout: layoutName,
      zoom: document.getElementById("enable-zoom").checked
    });
  }

  toggleZoom(event) {
    this.setState({ zoom: !this.state.zoom })
  }

  loadGraph = (layoutName, zoomOpt) => {
    API.getStoryObj().then(res => {
      this.setState({ res });
      storyGraph(this.state.res.data, layoutName, this.state.zoom);
    }).catch(err => console.log(err));
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(target);
    this.setState({ zoom: document.getElementById("enable-zoom").checked });
  }

  // Commented out to speed up initial loading of admin component
  // componentDidMount = () => {
  //   // Store storyObj in state
  //   API.getStoryObj().then(res => {
  //     this.setState({ res });
  //     storyGraph(this.state.res.data, "breadthfirst");
  //   }).catch(err => console.log(err));
  // };
  
  render() {
  return (
      <div class="pure-g">
        <div class="pure-u-1-4">
          <button className="pure-button" onClick={ this.loadGraph.bind(this, "breadthfirst") }>Breadth-First</button>
          <button className="pure-button" onClick={ this.loadGraph.bind(this, "cose") }>COSE</button>
          <button className="pure-button" onClick={ this.loadGraph.bind(this, "grid") }>Grid</button>
          <button className="pure-button" onClick={ this.loadGraph.bind(this, "random") }>Random</button>
          <fieldset id="zoom-input-form">
            <label for="option-one" class="pure-checkbox">
              <input id="enable-zoom" type="checkbox" onClick={ this.toggleZoom.bind(this) }/>Enable Zoom?
            </label>
          </fieldset>
        </div>
        <div class="pure-u-2-4">
          <div id={ this.props.id } ></div>
        </div>
      </div>
  )};
};

export default AdminStoryGraph;
