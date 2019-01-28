import React, { Component } from "react";
import "../css/App.css";
// import components

class Answer extends Component {
  render() {
    return (
      <button className="answer">
        <div>{this.props.content}</div>
      </button>
    );
  }
}

// class Question extends Component {
//   render() {
//     return <div className="Question Component">Trivia!</div>;
//   }
// }

export default Answer;
