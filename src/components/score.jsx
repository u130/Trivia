import React, { Component } from "react";
// import components

class Score extends Component {
  render() {
    return (
      <div className="score">
        <span className="right"> Amount Correct: {this.props.content}</span>
        <span className="left">Amount Wrong: {this.props.total}</span>
        <span className="final" />
      </div>
    );
  }
}

export default Score;
