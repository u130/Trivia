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
    let questions = [];
    let choices = [];
    let correct_choice_index = [];
    let count = 0;
    firebaseDatabase.ref("/questions").on("value", snapshot => {
      //let randomQuestion = getRandomQuestion(questions)

      for (var key in snapshot.val()) {
        questions.push(snapshot.val()[key]["question_text"]);
        choices.push(snapshot.val()[key]["choices"]);
        correct_choice_index.push(snapshot.val()[key]["correct_choice_index"]);
        //console.log(correct_choice_index);
      }
    });
    this.state = {
      currentQuestions: {
        question_text: questions[count],
        choices: choices[count],
        correct_choice_index: correct_choice_index[count]
      }
    };
  }

  handleClick(index) {
    if (this.state.currentQuestion.correct_choice_index === index) {
      alert("correct");
      count++;
      this.setState({
        currentQuestions: {
          question_text: this.state.currentQuestions.questions[count],
          choices: this.state.currentQuestions.choices[count],
          correct_choice_index: this.state.currentQuestions
            .correct_choice_index[count]
        }
        // currentQuestion: randomQuestion,
      });
    } else {
      alert("incorrect");
    }
  }

  render() {
    return (
      <div>
        <div>
          <Question
            handleClick={i => this.handleClick(i)}
            currentQuestion={this.state.currentQuestions}
          />
        </div>
        <div>
          <Answer
            content={this.state.currentQuestions.choices}
            onClick={index => this.handleClick(index)}
            index={0}
          />
          <Answer
            content={this.state.currentQuestions.choices}
            onClick={index => this.handleClick(index)}
            index={1}
          />
          <Answer
            content={this.state.currentQuestions.choices}
            onClick={index => this.handleClick(index)}
            index={2}
          />
          <Answer
            content={this.state.currentQuestions.choices}
            onClick={index => this.handleClick(index)}
            index={3}
          />
        </div>
      </div>
    );
  }
}
export default App;
