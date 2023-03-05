import { Component } from 'react';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div style={{ margin: '0 auto', padding: '20px' }}>
        <h1 hidden>Phonebook App</h1>
        <h2>Phonebook</h2>
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
        <h2>Contacts</h2>
      </div>
    );
  }
}
