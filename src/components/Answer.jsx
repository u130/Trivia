import React, { Component } from "react";
import "../css/App.css";
// import components

class Answer extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.content);
  }
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.Clickhandler(this.props.index)}
          className="answer"
        >
          <div>{this.props.content[this.props.index]}</div>
        </button>
      </div>
    );
  }
}

export default Answer;
