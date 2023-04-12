import { Component } from 'react';

export class AddContactForm extends Component {
  static propTypes = {};

  state = {
    name: '',
  };

  handleChange = e => {
    this.setState({
      name: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ border: '1px solid black', width: '280px', padding: '20px' }}
      >
        <h3>Name</h3>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <button type="submit" style={{ display: 'block', marginTop: '20px' }}>
          Add contact
        </button>
      </form>
    );
  }
}
