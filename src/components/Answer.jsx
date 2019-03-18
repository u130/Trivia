import React, { Component } from "react";
import { buildFirebase } from "../clients/firebase";
import "../css/App.css";
// import components

class Answer extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.onClick(this.props.index)}
        className="answer"
      >
        <div>{this.props.content}</div>
      </button>
    );
  }
}

export default Answer;
