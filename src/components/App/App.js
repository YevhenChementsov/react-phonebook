import { Component } from 'react';

import { ContactAddForm, ContactList, SearchFilter } from 'components';
import { Time } from 'components/Time/Time';
import {
  MdAddCircle,
  MdBattery30,
  MdSignalCellular2Bar,
  MdSignalWifi3Bar,
} from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import { Container } from './App.styled';
export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    visible: false,
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

  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };

  render() {
    const { filter } = this.state;
    const { addContact, changeFilter, deleteContact } = this;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <h1 hidden>Phonebook App</h1>
        <section
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Time />
          <div>
            <MdSignalWifi3Bar />
            <MdSignalCellular2Bar />
            <MdBattery30 />
          </div>
        </section>
        <section>
          <SearchFilter
            title="Contacts"
            value={filter}
            onChangeFilter={changeFilter}
          />
        </section>

        <ContactAddForm onSubmit={addContact} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
        <MdAddCircle color="green" size={48} />
      </Container>
    );
  }
}
