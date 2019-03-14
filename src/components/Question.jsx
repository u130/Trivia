import React, { Component } from "react";
// import components

class Question extends Component {
  render() {
    return (
      <div className="question">
        <span>{this.props.currentQuestion.question_text}</span>
      </div>
    );
  }
}

export default Question;
