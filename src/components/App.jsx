import React, { Component } from "react";
import "../css/App.css";
import Question from "./Question.jsx";
import Answer from "./Answer.jsx";
// import components

class App extends Component {
  render() {
    return (
      <div>
        <Question content={"#"} />
        <Answer correct={false} content={"1"} />
        <Answer correct={true} content={"2"} />
        <Answer correct={false} content={"3"} />
        <Answer correct={false} content={"4"} />
      </div>
    );
  }
}
export default App;
