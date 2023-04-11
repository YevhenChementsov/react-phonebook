import { Component } from 'react';

import { AddContactForm, ContactList } from 'components';
import { Container } from './App.styled';

// import { v4 as uuidv4 } from 'uuid';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  render() {
    const { contacts } = this.state;
    return (
      <Container>
        <h1 hidden>Phonebook App</h1>
        <h2>Phonebook</h2>
        <AddContactForm />
        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </Container>
    );
  }
}
