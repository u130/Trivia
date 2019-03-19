/*global $*/
import React from "react";
import ReactDOM from "react-dom";
import "./css/App.css";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

export function correctEff(index, correct_choise_index) {
  if (index === correct_choise_index) {
    $("html").css(
      "background",
      "linear-gradient(127deg, rgba(0, 255, 0, 0.8), linear-gradient(217deg,    rgba(255, 0, 0, 0.8),rgba(255, 0, 0, 0) 70.71%  ), rgba(0, 255, 0, 0) 70.71%),  linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);"
    );
  }
}
