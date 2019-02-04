import React, { Component } from "react";
import "../css/App.css";
import Question from "./Question.jsx";
import Answer from "./Answer.jsx";
import { buildFirebase } from "../clients/firebase";
import { getRandomQuestion } from "../clients/firebase";
// import components

var firebaseDatabase = buildFirebase();

class App extends Component {
  constructor(props) {
    super(props);
    firebaseDatabase.ref("/questions").on("value", snapshot => {
      let questions = snapshot.val();
      //let randomQuestion = getRandomQuestion(questions)
      this.setState({
        questions: questions
        // currentQuestion: randomQuestion,
      });
      console.log(snapshot.val());
    });
    this.state = {
      questions: {},
      currentQuestion: {
        question_text: "Question 1: Which choice is correct?",
        choices: ["a", "b", "c", "d"],
        correct_choice_index: 2
      }
    };
  }
  render() {
    return (
      <div>
        <Question content={this.state.currentQuestion.question_text} />
        <Answer
          correct={false}
          content={this.state.currentQuestion.choices[0]}
        />
        <Answer
          correct={false}
          content={this.state.currentQuestion.choices[1]}
        />
        <Answer
          correct={true}
          content={this.state.currentQuestion.choices[2]}
        />
        <Answer
          correct={false}
          content={this.state.currentQuestion.choices[3]}
        />
      </div>
    );
  }
}
export default App;
