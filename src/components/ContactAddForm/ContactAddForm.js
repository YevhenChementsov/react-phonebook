import { Component } from 'react';

import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export class AddContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

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
    const { name, number } = this.state;
    const { handleSubmit, handleChange, nameInputId, numberInputId } = this;

    return (
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        style={{ border: '1px solid black', width: '280px', padding: '20px' }}
      >
        <label htmlFor={nameInputId}>
          <h3>Name</h3>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            id={nameInputId}
            required
          />
        </label>
        <label htmlFor={numberInputId}>
          <h3>Number</h3>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            id={numberInputId}
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
