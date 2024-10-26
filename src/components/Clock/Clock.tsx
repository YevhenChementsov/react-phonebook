import { Component } from 'react';
import { Time } from './Clock.styled';

interface ClockState {
  date: Date;
}

export class Clock extends Component<Record<string, never>, ClockState> {
  private timeID!: NodeJS.Timeout;

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
      <Time>
        {this.state.date.toLocaleTimeString([], { timeStyle: 'short' })}
      </Time>
    );
  }
}
