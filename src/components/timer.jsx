import React, { Component } from "react";
// import components

class Timer extends Component {
  render() {
    return (
      <div>
        <div>
          <progress value="0" max="20" id="progressBar" />
          <p id="timer" />

          <div />
        </div>
      </div>
    );
  }
}

export default Timer;
