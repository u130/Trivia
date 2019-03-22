const React = require("react");
const ms = require("pretty-ms");

function check(x, y) {
  console.log(x, y);
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      end: 20,
      value: 0,
      time: 0,
      isOn: false,
      start: 0
    };
    this.endTimer = this.endTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  startTimer() {
    console.log(Date.now());
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    });
    this.timer = setInterval(
      () =>
        this.setState(
          {
            time: Date.now() - this.state.start,
            value: this.state.value + 1
          },
          check(1, 2)
        ),
      1000
    );
  }

  stopTimer() {
    this.setState({ isOn: false });
    clearInterval(this.timer);
  }

  resetTimer() {
    this.setState({ time: 0, isOn: false });
  }

  endTimer() {
    this.setState({ time: 0, isOn: false });
  }

  render() {
    let start =
      this.state.time === 0 ? (
        <button onClick={this.startTimer}>start</button>
      ) : null;
    let stop =
      this.state.time === 0 || !this.state.isOn ? null : (
        <button onClick={this.stopTimer}>stop</button>
      );
    let resume =
      this.state.time === 0 || this.state.isOn ? null : (
        <button onClick={this.startTimer}>resume</button>
      );
    let reset =
      this.state.time === 0 || this.state.isOn ? null : (
        <button onClick={this.resetTimer}>reset</button>
      );
    return (
      <div>
        <h3>timer: {this.state.value}</h3>
        {start}
        {resume}
        {stop}
        {reset}
      </div>
    );
  }
}
module.exports = Timer;
