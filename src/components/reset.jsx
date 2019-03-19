import React, { Component } from "react";
// import components

class Reset extends Component {
  render() {
    return (
      <div className="center">
        <button className="reset" onClick={this.props.resetClick}>
          <span>{this.props.content}</span>
        </button>
      </div>
    );
  }
}

export default Reset;
