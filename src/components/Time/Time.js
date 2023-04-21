import { Component } from 'react';

import styled from '@emotion/styled';

const Clock = styled.p`
  font-weight: 700;
`;
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
      <Clock>
        {this.state.date.toLocaleTimeString([], { timeStyle: 'short' })}
      </Clock>
    );
  }
}
