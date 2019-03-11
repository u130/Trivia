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
      let questions = [];
      let choices = [];
      //let randomQuestion = getRandomQuestion(questions)

      console.log(snapshot.val());
      for (var key in snapshot.val()) {
        questions.push(snapshot.val()[key]["question_text"]);
      }

      this.setState({
        questions: questions,
        currentQuestions: {
          question_text: questions,
          choices: questions,
          correct_choice_index: questions
        }
        // currentQuestion: randomQuestion,
      });
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

  handleClick(index) {
    if (this.state.currentQuestion.correct_choice_index == index) {
      alert("correct");
    } else {
      alert("incorrect");
    }
  }

  render() {
    return (
      <div>
        <Question
          handleClick={i => this.handleClick(i)}
          currentQuestion={this.state.currentQuestion}
        />
      </div>
    );
  }
}
export default App;
