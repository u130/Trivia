import React, { Component } from "react";
import Answer from "./Answer.jsx";
// import components

class Question extends Component {
  render() {
    var data = this.props.currentQuestion;
    return (
      <div className="question">
        <span>{data.question_text}</span>

        <Answer correct={false} content={data.choices[0]} />
        <Answer correct={false} content={data.choices[1]} />
        <Answer correct={true} content={data.choices[2]} />
        <Answer correct={false} content={data.choices[3]} />
      </div>
    );
  }
  handleClick() {
    this.setState({
      shouldDisplayAnswer: true
    });
  }
}

export default Question;
