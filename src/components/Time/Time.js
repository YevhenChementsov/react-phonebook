import { Component } from 'react';

export class Time extends Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timeID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <p>{this.state.date.toLocaleTimeString([], { timeStyle: 'short' })}</p>
    );
  }
}
