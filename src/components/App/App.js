import { Component } from 'react';

import { AddContactForm, ContactList } from 'components';
import { v4 as uuidv4 } from 'uuid';
import { Container } from './App.styled';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    ],
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <Container>
        <h1 hidden>Phonebook App</h1>
        <h2>Phonebook</h2>
        <AddContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />
      </Container>
    );
  }
}
