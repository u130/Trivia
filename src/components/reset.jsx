import React, { Component } from "react";
// import components

class Reset extends Component {
  render() {
    return (
      <button className="reset" onClick={this.props.resetClick}>
        <span>{this.props.content}</span>
      </button>
    );
  }
}

export default Reset;
