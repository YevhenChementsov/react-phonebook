import { Component } from 'react';

import { AddContactForm, ContactList } from 'components';
import { v4 as uuidv4 } from 'uuid';
import { Container } from './App.styled';

export default class App extends Component {
  state = {
    contacts: [],
  };

  addContact = name => {
    const contact = {
      id: uuidv4(),
      name,
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
