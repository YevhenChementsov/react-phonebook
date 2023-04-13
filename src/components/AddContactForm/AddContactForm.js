import { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';

export class AddContactForm extends Component {
  static propTypes = {};

  state = {
    name: '',
    number: '',
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ border: '1px solid black', width: '280px', padding: '20px' }}
      >
        <label htmlFor={this.nameInputId}>
          <h3>Name</h3>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
            required
          />
        </label>
        <label htmlFor={this.numberInputId}>
          <h3>Number</h3>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
            required
          />
        </label>
        <button type="submit" style={{ display: 'block', marginTop: '20px' }}>
          Add contact
        </button>
      </form>
    );
  }
}
