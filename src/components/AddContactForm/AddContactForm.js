import { Component } from 'react';

export class AddContactForm extends Component {
  static propTypes = {};

  state = {
    name: '',
  };

  render() {
    return (
      <form
        style={{ border: '1px solid black', width: '500px', padding: '20px' }}
      >
        <h3>Name</h3>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button style={{ display: 'block', marginTop: '20px' }}>
          Add contact
        </button>
      </form>
    );
  }
}
