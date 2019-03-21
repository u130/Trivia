/*global $*/
import React from "react";
import ReactDOM from "react-dom";
import "./css/App.css";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

export default function timer(i) {
  console.log("start");
  var timeleft = i - 1;
  var downloadTimer = setInterval(function() {
    document.getElementById("progressBar").value = i - timeleft;
    timeleft -= 1;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
    }
    console.log(document.getElementById("progressBar").value);
    console.log(timeleft);
    $("#timer").html(timeleft);

    if (timeleft === 0) {
      console.log("end");
      $(".answer").html("Time's Up!!!!");
      $("#timer").html("<p style='color:yellow'>Final  Score</p>");
      $(".question").html("Time's Up!!!!");
      clearInterval(downloadTimer);
    }
  }, 500);
}

timer(22);
