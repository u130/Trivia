import React, { Component } from "react";
import Answer from "./Answer.jsx";
// import components

class Question extends Component {
  render() {
    var data = this.props.currentQuestion;
    return (
      <div className="question">
        <span>{data.question_text}</span>

        <Answer
          correct={false}
          content={data.choices[0]}
          Clickhandler={this.props.handleClick}
          index={0}
        />
        <Answer
          correct={false}
          content={data.choices[1]}
          Clickhandler={this.props.handleClick}
          index={1}
        />
        <Answer
          correct={true}
          content={data.choices[2]}
          Clickhandler={this.props.handleClick}
          index={2}
        />
        <Answer
          correct={false}
          content={data.choices[3]}
          Clickhandler={this.props.handleClick}
          index={3}
        />
      </div>
    );
  }
}

export default Question;
