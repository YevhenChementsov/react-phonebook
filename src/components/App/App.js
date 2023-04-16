import { Component } from 'react';

import { ContactAddForm, ContactList, SearchFilter } from 'components';
import { v4 as uuidv4 } from 'uuid';
import { Container } from './App.styled';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storageContactList = JSON.parse(localStorage.getItem('contactList'));

    if (storageContactList) {
      this.setState({ contacts: storageContactList });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      localStorage.setItem('contactList', JSON.stringify(contacts));
    }
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(({ contacts }) => {
      return contacts.some(contact => contact.name.includes(name))
        ? window.alert(`${contact.name} is already in contacts.`)
        : { contacts: [contact, ...contacts] };
    });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const lowerCaseFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const { addContact, changeFilter, deleteContact } = this;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <h1 hidden>Phonebook App</h1>
        <h2>Phonebook</h2>
        <ContactAddForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <SearchFilter value={filter} onChangeFilter={changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </Container>
    );
  }
}
