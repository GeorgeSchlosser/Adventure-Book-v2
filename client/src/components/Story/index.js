import React, { Component } from "react";
import Modal from '../Modal/Modal';
import API from "../../utils/API";
import "./style.css";


class Story extends Component {

  // state = {
  //   data : [],
  //   dataIndex: 0,
  //   // correctChoice: data[dataIndex].correct_choice
  //   userChosePoorly: false

  // }
  constructor() {
    super();

    this.state = {
      isShowing: false,
      data: [],
      dataIndex: 0,
    }
  }

  componentDidMount() {
    API.getFullStory().then(res => {
      this.setState({
        data: res.data
      }, () => console.log(this.state.data))
    })
  };

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  }

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  }

  handleUserChoice = correct => {
    // alert("you clicked a button");
    let story = this.state.data[this.state.dataIndex];
    // let crrctChoice = story.correct_choice;

    // console.log(event)

    if (correct) {
      // alert("Oh Shit!");
      // add to the state dataindex to progress story
      this.setState({
        dataIndex: this.state.dataIndex + 1,
      });
    } else {
      // pop-up modal of wrong_choice_result
      // <WrongModal />
      // alert(story.wrong_choice_result)
      // this.setState({
      //   userChosePoorly: true,
      this.openModalHandler();
      // });

    }


  };

  // this.props = {
  //   id: story.id,
  //   crntScene: story.scene_title,
  //   text: story.scene_text,
  //   nxtScene: story.next_scene,
  //   crctChoice: story.correct_choice,
  //   choice_a: story.choice_a,
  //   choice_b: story.choice_b,
  //   wrongChoiceText: story.wrong_choice_result
  // }

  render() {
    let story = this.state.data[this.state.dataIndex];
    // let crrctChoice = story.;
    // console.log(crrctChoice); 

    return (
      story ?
        <div className="story">
          {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}
          <div className="pure-g">
            <div className="pure-u-md-1-4"></div>
            <div className="pure-u-md-1-2 pure-u-sm-1">
              <h4>{story.scene_text}</h4>
            </div>
            <div className="pure-u-md-1-4"></div>
          </div>
          <div className="pure-g">
            <div>

            </div>
            <div >
              <button onClick={() => this.handleUserChoice(story.correct_choice === "choice_a")}>{story.choice_a}</button>
              <button onClick={() => this.handleUserChoice(story.correct_choice === "choice_b")}>{story.choice_b}</button>
            </div>
          </div>

          {/* <button>{story.correct_choice}</button> */}
          <Modal
            className="modal"
            show={this.state.isShowing}
            close={this.closeModalHandler}>
            <h3>{story.wrong_choice_result}</h3>
          </Modal>
        </div>
        // ||
        // <WrongModal 
        // story/>
        : <div></div>
    )

  }
}

export default Story;