import { Component } from 'react';

export class Time extends Component {
  state = { date: new Date() };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return <h2>{this.state.date.toLocaleTimeString()}</h2>;
  }
}
