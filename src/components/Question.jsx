import React, { Component } from "react";
import Answer from "./Answer.jsx";
// import components

class Question extends Component {
  handleClick() {
    alert("Click");
  }
  render() {
    var data = this.props.currentQuestion;
    return (
      <div className="question">
        <span>{data.question_text}</span>

        <Answer
          correct={false}
          content={data.choices[0]}
          Clickhandler={this.handleClick}
        />
        <Answer
          correct={false}
          content={data.choices[1]}
          Clickhandler={this.handleClick}
        />
        <Answer
          correct={true}
          content={data.choices[2]}
          Clickhandler={this.handleClick}
        />
        <Answer
          correct={false}
          content={data.choices[3]}
          Clickhandler={this.handleClick}
        />
      </div>
    );
  }
}

export default Question;
