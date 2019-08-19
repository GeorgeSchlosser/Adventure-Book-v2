import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import API from "../../utils/API";


class Story extends Component {

  state = {
    data: [],
    dataIndex: 0,
    open: false
    // correctChoice: data[dataIndex].correct_choice
    // userChosePoorly: false

  }

  componentDidMount() {
    API.getFullStory().then(res => {
      this.setState({
        data: res.data
      }, () => console.log(this.state.data))
    })
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

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
      alert(story.wrong_choice_result);
      this.onOpenModal();

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
    const { open } = this.state;
    // let crrctChoice = story.;
    // console.log(crrctChoice); 

    return (
      story ?
        <div className="story">
          <h4>{story.scene_text}</h4>
          <button onClick={() => this.handleUserChoice(story.correct_choice === "choice_a")}>{story.choice_a}</button>
          <button onClick={() => this.handleUserChoice(story.correct_choice === "choice_b")}>{story.choice_b}</button>
          {/* <button>{story.correct_choice}</button> */}
          <Modal open={open} onClose={this.onCloseModal} center>
            <h2>Simple centered modal</h2>
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