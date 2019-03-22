import React, { Component } from "react";
import "../css/App.css";
import Question from "./Question.jsx";
import Answer from "./Answer.jsx";
import Timer from "./timer.jsx";
import Score from "./score.jsx";
import Reset from "./reset.jsx";
import { buildFirebase } from "../clients/firebase";
import { getRandomQuestion } from "../clients/firebase";
// import components
/*global $*/
var count = 0;
var amount = 0;
var wrong = 0;
let allQuest = [];
var firebaseDatabase = buildFirebase();

class App extends Component {
  constructor(props) {
    super(props);
    let questions = [];
    var choices = [];
    let correct_choice_index = [];

    this.state = {
      correct: amount,
      incorrect: wrong,
      currentQuestions: {
        question_text: [""],
        choices: ["", "", "", ""],
        correct_choice_index: 0
      }
    };
    firebaseDatabase.ref("/questions").on("value", snapshot => {
      //let randomQuestion = getRandomQuestion(questions)

      for (var key in snapshot.val()) {
        questions.push(snapshot.val()[key]["question_text"]);
        allQuest.push(snapshot.val()[key]);
        choices.push(snapshot.val()[key]["choices"]);
        correct_choice_index.push(snapshot.val()[key]["correct_choice_index"]);
        console.log();
      }
      this.setState({
        currentQuestions: {
          question_text: questions[count],
          choices: choices[count],
          correct_choice_index: correct_choice_index[count]
        }
      });
    });
  }

  handleClick(index) {
    console.log(index);
    if (this.state.currentQuestions.correct_choice_index === index) {
      amount++;
      count++;
      console.log(count);
      let currentQuestions = allQuest[count];
      this.setState({
        correct: amount,
        incorrect: wrong,
        currentQuestions: {
          question_text: currentQuestions.question_text,
          choices: currentQuestions.choices,
          correct_choice_index: currentQuestions.correct_choice_index
        }
      });
    } else {
      wrong++;
      let currentQuestions = allQuest[count];
      this.setState({
        correct: amount,
        incorrect: wrong,
        currentQuestions: {
          question_text: currentQuestions.question_text,
          choices: currentQuestions.choices,
          correct_choice_index: currentQuestions.correct_choice_index
        }
      });
    }
  }

  resetClick(i) {
    console.log(count, amount, wrong);
    count = i;
    amount = i;
    wrong = i;
    console.log(count, amount, wrong);
    let currentQuestions = allQuest[count];
    this.setState({
      correct: amount,
      incorrect: wrong,
      currentQuestions: {
        question_text: currentQuestions.question_text,
        choices: currentQuestions.choices,
        correct_choice_index: currentQuestions.correct_choice_index
      }
    });
  }

  render() {
    return (
      <div>
        <div>
          <Timer />
        </div>
        <div>
          <Score content={this.state.correct} total={wrong} />
        </div>
        <div>
          <Question
            handleClick={i => this.handleClick(i)}
            currentQuestion={this.state.currentQuestions}
          />
        </div>
        <div>
          <Reset content={"Reset"} resetClick={() => this.resetClick(0)} />
        </div>
        <div>
          <Answer
            content={this.state.currentQuestions.choices[0]}
            onClick={index => this.handleClick(index)}
            index={0}
          />
          <Answer
            content={this.state.currentQuestions.choices[1]}
            onClick={index => this.handleClick(index)}
            index={1}
          />
          <Answer
            content={this.state.currentQuestions.choices[2]}
            onClick={index => this.handleClick(index)}
            index={2}
          />
          <Answer
            content={this.state.currentQuestions.choices[3]}
            onClick={index => this.handleClick(index)}
            index={3}
          />
        </div>
      </div>
    );
  }
}
export default App;
